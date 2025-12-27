import { useEffect, useState } from "react";

export function useDebounce(
  delay = 300
): [string, string, (val: string) => void] {
  const [value, setValue] = useState<string>("");
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return [debounced, value, setValue];
}
