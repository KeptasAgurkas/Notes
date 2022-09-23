import { createContext, PropsWithChildren, useContext, useState } from "react";

const noteContext = createContext<{
  id: string;
  text: string;
  date: string;
} | null>(null);

export function useNoteContext() {
  const ctx = useContext(noteContext);
  if (ctx == null) throw new Error("Provide Note Context");
  return ctx;
}
