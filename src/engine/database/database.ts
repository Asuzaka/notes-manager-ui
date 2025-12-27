import type { Storage } from "../storage/storage";
import type { DatabaseSchema } from "./schema";

export type TableName = keyof DatabaseSchema;

/**
 * Utility type for field-based queries.
 *
 * Represents a partial match object where only the provided
 * fields are used to filter entities.
 *
 * Example:
 *   { email: "test@mail.com", role: "admin" }
 */
type Where<T> = Partial<{
  [K in keyof T]: T[K];
}>;

/**
 * Core database abstraction layer.
 *
 * Provides a simple, type-safe API for performing CRUD-like
 * operations on data stored via a `Storage` implementation.
 *
 * This class does not enforce schemas at runtime and assumes
 * each entity contains a `documentId` field used as a primary key.
 */
export class Database {
  private storage: Storage;

  /**
   * Creates a new Database instance.
   *
   * @param storage - The underlying storage mechanism
   * (e.g. localStorage wrapper, in-memory storage, etc.)
   */
  constructor(storage: Storage) {
    this.storage = storage;
  }

  /**
   * Retrieve all records from a table.
   *
   * @param table - The table name
   * @returns An array of stored entities, or an empty array if none exist
   */
  private getAll<T>(table: TableName): T[] {
    return this.storage.get<T[]>(table) ?? [];
  }

  /**
   * Persist the full dataset for a table.
   *
   * @param table - The table name
   * @param data - The updated list of entities to store
   */
  private save<T>(table: TableName, data: T[]): void {
    this.storage.save(table, data);
  }

  /**
   * Check whether an entity matches all provided fields.
   *
   * Only fields present in the `where` object are compared.
   * Comparison is strict (`===`).
   *
   * @param entity - The entity being tested
   * @param where - Partial object describing required field values
   * @returns `true` if the entity matches all fields, otherwise `false`
   */
  private matches<T extends object>(entity: T, where: Where<T>): boolean {
    for (const key of Object.keys(where) as (keyof T)[]) {
      if (entity[key] !== where[key]) {
        return false;
      }
    }
    return true;
  }

  // -------------------------
  // CREATE
  // -------------------------

  /**
   * Insert a new entity into a table.
   *
   * Throws an error if an entity with the same `documentId`
   * already exists.
   *
   * @param table - The table name
   * @param entity - The entity to create
   * @returns The created entity
   */
  public create<T extends { documentId: string }>(
    table: TableName,
    entity: T
  ): T {
    const data = this.getAll<T>(table);

    if (data.some((e) => e.documentId === entity.documentId)) {
      throw new Error(`Entity with id ${entity.documentId} already exists`);
    }

    data.push(entity);
    this.save(table, data);
    return entity;
  }

  /**
   * Retrieve a single entity by its `documentId`.
   *
   * @param table - The table name
   * @param id - The entity's unique identifier
   * @returns The found entity, or `null` if not found
   */
  public findById<T extends { documentId: string }>(
    table: TableName,
    id: string
  ): T | null {
    return this.getAll<T>(table).find((e) => e.documentId === id) ?? null;
  }

  /**
   * Find an entity by its `documentId` and apply partial updates.
   *
   * If the entity does not exist, no changes are made.
   *
   * @param table - The table name
   * @param id - The entity's unique identifier
   * @param update - Partial object containing fields to update
   * @returns The updated entity, or `null` if not found
   */
  public findAndUpdateById<T extends { documentId: string }>(
    table: TableName,
    id: string,
    update: Partial<T>
  ): T | null {
    const data = this.getAll<T>(table);
    const index = data.findIndex((e) => e.documentId === id);

    if (index === -1) return null;

    const updated = { ...data[index], ...update };
    data[index] = updated;

    this.save(table, data);
    return updated;
  }

  /**
   * Find all entities that match the given fields.
   *
   * Matching is performed using strict equality (`===`)
   * and all provided fields must match.
   *
   * @param table - The table name
   * @param where - Partial object describing required field values
   * @returns An array of matching entities
   */
  public find<T extends object>(table: TableName, where: Where<T>): T[] {
    return this.getAll<T>(table).filter((entity) =>
      this.matches(entity, where)
    );
  }

  /**
   * Find the first entity that matches the given fields.
   *
   * Intended for queries where the result is expected
   * to be unique (e.g. email, username).
   *
   * @param table - The table name
   * @param where - Partial object describing required field values
   * @returns The matching entity, or `null` if not found
   */
  public findUnique<T extends object>(
    table: TableName,
    where: Where<T>
  ): T | null {
    return (
      this.getAll<T>(table).find((entity) => this.matches(entity, where)) ??
      null
    );
  }
}
