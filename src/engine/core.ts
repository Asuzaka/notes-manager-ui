import type { NoteEntity } from "../entities/note";
import type { UserEntity } from "../entities/user";
import type { SignInType, SignUpType } from "../features/auth/model/type";
import { Database } from "./database/database";

import { Storage } from "./storage/storage";
import { NoteRepository } from "./repository/note-repository";
import { UserRepository } from "./repository/user-repository";

/**
 * Core application facade.
 *
 * Exposes only user- and note-related use cases.
 * Acts as the single entry point for the frontend domain layer.
 */
export class Core {
  private storage: Storage;
  private db: Database;
  private noteRepo: NoteRepository;
  private userRepo: UserRepository;

  constructor() {
    this.storage = new Storage();
    // this.storage.enableEncryption();

    this.db = new Database(this.storage);
    this.noteRepo = new NoteRepository(this.db);
    this.userRepo = new UserRepository(this.db);
  }

  // =====================
  // AUTH / USER
  // =====================

  /**
   * Register a new user.
   */
  signup(payload: SignUpType): UserEntity | Error {
    return this.userRepo.signup(payload);
  }

  /**
   * Authenticate user and persist session.
   */
  signin(payload: SignInType): UserEntity | Error {
    const user = this.userRepo.signin(payload);

    if (!(user instanceof Error)) {
      this.storage.save("auth", user);
    }

    return user;
  }

  /**
   * Get currently authenticated user.
   */
  auth(): UserEntity | null {
    return this.storage.get<UserEntity>("auth");
  }

  /**
   * Update user profile.
   */
  updateUser(user: UserEntity): UserEntity {
    return this.userRepo.update(user);
  }

  /**
   * Find user by id.
   */
  getUserById(id: string): UserEntity | null {
    return this.userRepo.findById(id);
  }

  // =====================
  // NOTES
  // =====================

  /**
   * Create a new note.
   */
  createNote(note: NoteEntity): NoteEntity {
    return this.noteRepo.create(note);
  }

  /**
   * Update an existing note.
   */
  updateNote(note: NoteEntity): NoteEntity {
    return this.noteRepo.update(note);
  }

  /**
   * Get note by id.
   */
  getNoteById(id: string): NoteEntity | null {
    return this.noteRepo.findById(id);
  }

  /**
   * Get all public notes.
   */
  getPublicNotes(): NoteEntity[] {
    return this.noteRepo.findPublic();
  }

  /**
   * Get notes created by a specific author.
   */
  getNotesByAuthor(userId: string): NoteEntity[] {
    return this.noteRepo.findByAuthor(userId);
  }
}
