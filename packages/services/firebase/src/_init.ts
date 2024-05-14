import { FirebaseApp, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { IFirebaseConfig } from "./_types";

export const initFirebaseApp = (config: IFirebaseConfig) => {
  return initializeApp(config);
};

export const getFireStore = (app: FirebaseApp) => {
  return getFirestore(app);
};

export const getFireStorage = (app: FirebaseApp) => {
  return getStorage(app);
};
