import { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";
import { doc, DocumentData, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection: string, id: string) => {
  const [document, setDocument] = useState<DocumentData | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);

      try {
        const docRef = doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          console.log("No such document exists!");
          return;
        }

        setDocument(docSnap.data());
      } catch (error: any) {
        setError(error);
      }

      setLoading(false);
    };

    loadDocument();
  }, [docCollection, id]);


  return { document, loading, error };
};
