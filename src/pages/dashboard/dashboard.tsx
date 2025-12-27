import { useDebounce } from "../../shared/hook/use-debounce";
import { useEffect, useState } from "react";
import { DashboardTabs } from "./tabs";
import { type NoteEntity, NoteList } from "../../entities/note";
import { DashboardHeader } from "./header";
import { ENV } from "../../shared/config/env";
import { useAuthStore } from "../../app/providers/store";

export type DashboardMode = "my" | "public";

export function DashboardPage() {
  const [notes, setNotes] = useState<NoteEntity[]>([]);
  const id = useAuthStore((s) => s.user?.documentId);
  const [mode, setMode] = useState<DashboardMode>("my");
  const [debounced, value, setValue] = useDebounce();

  useEffect(() => {
    const run = () => {
      if (mode == "my") {
        const my = ENV.OFFLINE.getNotesByAuthor(id!).filter((doc) =>
          doc.title.toLowerCase().includes(debounced.toLowerCase())
        );
        setNotes(my);
      } else {
        const pub = ENV.OFFLINE.getPublicNotes().filter((doc) =>
          doc.title.toLowerCase().includes(debounced.toLowerCase())
        );
        setNotes(pub);
      }
    };
    run();
  }, [debounced, mode, id]);

  return (
    <div className="space-y-8">
      <DashboardHeader value={value} setValue={setValue} />
      <DashboardTabs mode={mode} setMode={setMode} />
      <NoteList notes={notes} tab={mode} />
    </div>
  );
}
