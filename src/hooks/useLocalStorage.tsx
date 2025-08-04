import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export function useLocalStorage(key: string): UseLocalStorage {
  const [returnVal, setReturnVal] = useState<LocalStorageReturnValue>(null);

  function setItem(value: LocalStorageSetValue): void {
    localStorage.setItem(key, JSON.stringify(value));
    setReturnVal(localStorage.getItem(key));
  }

  function removeItem(): void {
    setReturnVal("");
    localStorage.removeItem(key);
  }

  return [returnVal, { setItem, removeItem }];
}
