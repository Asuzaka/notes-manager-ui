import type { UserEntity } from "../../entities/user";
import type { UserRecord } from "../database/records";
import type { Database } from "../database/database";
import type { NoteEntity } from "../../entities/note";
import { generateId, isDefined, now } from "./helper";
import type { SignInType, SignUpType } from "../../features/auth/model/type";

export class UserRepository {
  private db: Database;

  constructor(database: Database) {
    this.db = database;
  }

  create(entity: UserEntity): UserEntity {
    const record = this.toRecord(entity, true);
    this.db.create("users", record);
    return this.findById(entity.documentId)!;
  }

  findById(id: string): UserEntity | null {
    const record = this.db.findById<UserRecord>("users", id);
    return record ? this.hydrate(record) : null;
  }

  findByEmail(email: string): UserEntity | null {
    const record = this.db.findUnique<UserRecord>("users", { email });
    return record ? this.hydrate(record) : null;
  }

  findAll(): UserEntity[] {
    return this.db.find<UserRecord>("users", {}).map((r) => this.hydrate(r));
  }

  signup(payload: SignUpType): UserEntity | Error {
    const existing = this.db.findUnique<UserRecord>("users", {
      email: payload.email,
    });

    if (existing) {
      return new Error("User with this email already exists");
    }

    const record: UserRecord = {
      documentId: generateId(),
      username: payload.username,
      email: payload.email,
      password: payload.password,

      confirmed: false,
      blocked: false,

      createdAt: now(),
      updatedAt: now(),

      noteIds: [],
    };

    this.db.create("users", record);
    return this.hydrate(record);
  }

  signin(payload: SignInType): UserEntity | Error {
    const record = this.db.findUnique<UserRecord>("users", {
      email: payload.email,
    });

    if (!record) {
      return new Error("Invalid email or password");
    }

    if (record.blocked) {
      return new Error("User is blocked");
    }

    if (record.password !== payload.password) {
      return new Error("Invalid email or password");
    }

    return this.hydrate(record);
  }

  update(entity: UserEntity): UserEntity {
    const record = this.toRecord(entity);
    const updated = this.db.findAndUpdateById(
      "users",
      entity.documentId,
      record
    );

    if (!updated) {
      throw new Error("User not found");
    }

    return this.findById(entity.documentId)!;
  }

  private hydrate(record: UserRecord): UserEntity {
    const notes = record.noteIds
      .map((id) => this.db.findById<NoteEntity>("notes", id))
      .filter(isDefined);

    return {
      ...record,
      notes,
    };
  }

  private toRecord(entity: UserEntity, isCreate = false): UserRecord {
    const { notes, ...rest } = entity;

    return {
      ...rest,
      updatedAt: now(),
      ...(isCreate ? { createdAt: now() } : {}),
      noteIds: notes?.map((n) => n.documentId) ?? [],
    };
  }
}
