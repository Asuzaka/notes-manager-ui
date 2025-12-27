import type { NoteEntity } from "../../entities/note";
import type { UserEntity } from "../../entities/user";
import type { Database } from "../database/database";
import type { NoteRecord } from "../database/records";
import { now } from "./helper";

export class NoteRepository {
  private db: Database;

  constructor(database: Database) {
    this.db = database;
  }

  create(entity: NoteEntity): NoteEntity {
    const record = this.toRecord(entity, true);
    this.db.create("notes", record);
    return this.findById(entity.documentId)!;
  }

  findById(id: string): NoteEntity | null {
    const record = this.db.findById<NoteRecord>("notes", id);
    return record ? this.hydrate(record) : null;
  }

  findPublic(): NoteEntity[] {
    return this.db
      .find<NoteRecord>("notes", { isPublic: true })
      .map((r) => this.hydrate(r));
  }

  findByAuthor(authorId: string): NoteEntity[] {
    return this.db
      .find<NoteRecord>("notes", { authorId })
      .map((r) => this.hydrate(r));
  }

  update(entity: NoteEntity): NoteEntity {
    const record = this.toRecord(entity);
    const updated = this.db.findAndUpdateById(
      "notes",
      entity.documentId,
      record
    );

    if (!updated) {
      throw new Error("Note not found");
    }

    return this.findById(entity.documentId)!;
  }

  private hydrate(record: NoteRecord): NoteEntity {
    const author = this.db.findById<UserEntity>("users", record.authorId);
    if (!author) {
      throw new Error("Author not found");
    }

    return {
      ...record,
      author,
    };
  }

  private toRecord(entity: NoteEntity, isCreate = false): NoteRecord {
    const { author, ...rest } = entity;

    return {
      ...rest,
      updatedAt: now(),
      ...(isCreate ? { createdAt: now() } : {}),
      authorId: author.documentId,
    };
  }
}
