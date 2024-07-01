import { useState, useEffect, useReducer } from "react";
import { db } from "../config/firebaseConfig";

import { doc, deleteDoc } from "firebase/firestore";

interface InitialStateProps {
  loading: null | boolean;
  error: null | string;
}
interface loadingAction {
  type: "LOADING";
}
interface deleteAction {
  type: "DELETED_DOC";
}
interface errorAction {
  type: "ERROR";
  payload?: string;
}
const initialState: InitialStateProps = {
  loading: null,
  error: null,
};

type ActionTypes = loadingAction | deleteAction | errorAction;

const deleteReducer = (state: InitialStateProps, action: ActionTypes) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };

    case "DELETED_DOC":
      return { loading: false, error: null };

    case "ERROR":
      return { loading: false, error: action.payload || null};

    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection: string) => {
  const [response, dispatch] = useReducer(deleteReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action: ActionTypes) => {
    if (!cancelled) {
      dispatch(action);
    }
    return null;
  };

  const deleteDocument = async (id: string) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      await deleteDoc(doc(db, docCollection, id));

      checkCancelBeforeDispatch({
        type: "DELETED_DOC",
      });
    } catch (error: any) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { deleteDocument, response };
};
