import { FirebaseApp } from "firebase/app";

import { IFirebaseConfig } from "./_types";

export const initFirebaseApp = async (config: IFirebaseConfig) => {
  const initializeApp = await import("firebase/app").then(
    (module) => module.default.initializeApp,
  );
  return initializeApp(config);
};

export const getFireStore = async (app: FirebaseApp) => {
  const getFirestore = await import("firebase/firestore").then(
    (module) => module.default.getFirestore,
  );
  return getFirestore(app);
};

export const getFireStorage = async (app: FirebaseApp) => {
  const getStorage = await import("firebase/storage").then(
    (module) => module.default.getStorage,
  );
  return getStorage(app);
};
