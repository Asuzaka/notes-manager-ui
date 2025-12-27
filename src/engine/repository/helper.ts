export function isDefined<T>(value: T | null | undefined): value is T {
  return value != null;
}
export const now = () => new Date().toISOString();

export function generateId(): string {
  return String(Date.now());
}
