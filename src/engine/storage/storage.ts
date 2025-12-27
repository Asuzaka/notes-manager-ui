/**
 * Storage is thin wrapper around browser localStorage.
 * It is responsible ONLY for persisting data locally
 * and supports optional client-side encryption.
 *
 * Designed for offline-first or offline-fallback scenarios.
 */
export class Storage {
  /**
   * Enables or disables encyption for stored values.
   * When enabled, values are Base64-encoded before saving.
   */

  private encryption = false;
  /**
   * Prefix added to all keys to avoid collisions
   * with other localstorage entries.
   */
  private readonly prefix = "app:";

  /** Enables encyption for all subsequent save operations.
   *
   * ⚠️ Existing unencrypted data will not be migrated automatically.
   */
  public enableEncryption(): void {
    this.encryption = true;
  }

  /**
   * Disables encryption for all subsequent save operations.
   */
  public disableEncryption(): void {
    this.encryption = false;
  }

  /**
   * Saves a value to localStorage under the given key.
   *
   * @typeParam T - Type of the value being stored
   * @param key - Storage key (without prefix)
   * @param value - Any JSON-serializable value
   *
   * @example
   * storage.save("user", { id: 1, name: "Jamshid" });
   */
  public save<T>(key: string, value: T): void {
    const data = JSON.stringify(value);
    const stored = this.encrypt(data);

    localStorage.setItem(this.withPrefix(key), stored);
  }

  /**
   * Retrieves a value from localStorage by key.
   *
   * @typeParam T - Expected return type
   * @param key - Storage key (without prefix)
   * @returns Parsed value or null if not found
   *
   * @example
   * const user = storage.get<User>("user");
   */
  public get<T>(key: string): T | null {
    const stored = localStorage.getItem(this.withPrefix(key));
    if (!stored) return null;

    const data = this.decrypt(stored);
    return JSON.parse(data);
  }

  /**
   * Removes a specific entry from localStorage.
   *
   * @param key - Storage key (without prefix)
   */
  public delete(key: string): void {
    localStorage.removeItem(this.withPrefix(key));
  }

  /**
   * Clears all entries created by this Storage instance.
   * Only keys with the defined prefix will be removed.
   */
  public clear(): void {
    Object.keys(localStorage)
      .filter((e) => e.startsWith(this.prefix))
      .forEach((v) => localStorage.removeItem(v));
  }

  /**
   * Adds a namespace prefix to a storage key.
   *
   * @param key - Raw storage key
   * @returns Namespaced storage key
   */
  private withPrefix(key: string): string {
    return `${this.prefix}${key}`;
  }

  /**
   * Encrypts data if encryption is enabled.
   *
   * ⚠️ Uses Base64 encoding (NOT secure encryption).
   * Intended only for light obfuscation.
   *
   * @param data - Raw string data
   * @returns Encrypted or original data
   */
  private encrypt(data: string): string {
    if (!this.encryption) return data;
    return btoa(data);
  }

  /**
   * Decrypts data if encryption is enabled.
   *
   * @param data - Stored string data
   * @returns Decrypted or original data
   */
  private decrypt(data: string): string {
    if (!this.encryption) return data;
    return atob(data);
  }
}
