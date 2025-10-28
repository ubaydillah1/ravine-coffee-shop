"use client";

import { useEffect, useState } from "react";

const useNotes = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("notes", notes);
    }, 300);

    return () => clearTimeout(timeout);
  }, [notes]);
  return [notes, setNotes];
};

export default useNotes;
