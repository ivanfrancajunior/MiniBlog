import { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import { doc, DocumentData, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection: string, id: string) => {
  const [document, setDocument] = useState<DocumentData>();

  const [error, setError] = useState<boolean | null>(null);

  const [loading, setLoading] = useState<boolean | null>(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap) {
          setDocument(docSnap.data());
        }
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
