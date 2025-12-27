import { Core } from "../../engine/core";

function getValue(key: string, crit: true): string;
function getValue(key: string, backup: string, crit?: boolean): string;

function getValue(key: string, arg2: string | boolean, arg3?: boolean): string {
  const v: string | undefined = import.meta.env["VITE_" + key];

  if (arg2 === true) {
    if (!v) throw new Error(`Missing env var: ${key}`);
    return v;
  }

  const backup = arg2 as string;
  const crit = arg3 ?? false;

  if (!v) {
    if (crit) throw new Error(`Missing env var: ${key}`);
    return backup;
  }

  return v;
}

interface EnvConfig {
  BACKEND_URL: string;
  OFFLINE: Core;
}

export const ENV: EnvConfig = {
  BACKEND_URL: getValue("BACKEND_URL", "Nothing rn"),
  OFFLINE: new Core(),
};
