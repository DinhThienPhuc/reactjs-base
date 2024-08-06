import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { TAsyncBoundary, tryDo } from "@phantompurr-react/utils";

export const getAllDocuments = async <T>(
  firestore: Firestore,
  c: string,
): Promise<TAsyncBoundary<T>> => {
  const collectionRef = collection(firestore, c);
  const { error, result } = await tryDo(getDocs(collectionRef));

  const items = result?.docs?.map?.((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as unknown as T;

  if (error) {
    console.error(error);
  }

  return {
    error,
    result: items,
  };
};

export const getDocumentById = async <T>(
  firestore: Firestore,
  c: string,
  id: string,
): Promise<TAsyncBoundary<T>> => {
  const documentRef = doc(firestore, c, id);
  const { error, result } = await tryDo(getDoc(documentRef));

  if (error) {
    console.error(error);
  }

  return {
    error,
    result: result?.data() as T,
  };
};

export const addDocument = async <T>(
  firestore: Firestore,
  c: string,
  data: DocumentData,
): Promise<TAsyncBoundary<T>> => {
  const collectionRef = collection(firestore, c);
  const { error, result } = await tryDo(addDoc(collectionRef, data));

  if (error) {
    console.error(error);
  }

  return {
    error,
    result: result as unknown as T,
  };
};

export const setDocument = async (
  firestore: Firestore,
  c: string,
  data: DocumentData,
): Promise<TAsyncBoundary<void>> => {
  const documentRef = doc(firestore, c, data.id);
  const { error, result } = await tryDo(
    setDoc(documentRef, data, { merge: true }),
  );

  if (error) {
    console.error(error);
  }

  return {
    error,
    result,
  };
};

export const deleteDocument = async (
  firestore: Firestore,
  c: string,
  id: string,
): Promise<TAsyncBoundary<void>> => {
  const documentRef = doc(firestore, c, id);
  const { error, result } = await tryDo(deleteDoc(documentRef));

  if (error) {
    console.error(error);
  }

  return {
    error,
    result,
  };
};
