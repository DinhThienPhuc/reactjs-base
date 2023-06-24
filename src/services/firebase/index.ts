import * as _Services from "_core/services";

import { IFighter } from "utils";

const firebaseConfig: _Services.IFirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASSUREMENT_ID,
};

const firebaseApp = _Services.initFirebaseApp(firebaseConfig);

const fireStore = _Services.getFireStore(firebaseApp);

export const getFighters = async () => {
  return await _Services.fireStoreAPI.getAllDocuments<IFighter[]>(
    fireStore,
    "fighter",
  );
};

export const addFighter = async (data: IFighter) => {
  return await _Services.fireStoreAPI.addDocument<IFighter>(
    fireStore,
    "fighter",
    data,
  );
};

export const getFighterById = async (id: string) => {
  return await _Services.fireStoreAPI.getDocumentById<IFighter>(
    fireStore,
    "fighter",
    id,
  );
};

export const setFighter = async (data: IFighter) => {
  return await _Services.fireStoreAPI.setDocument(fireStore, "fighter", data);
};

export const deleteFighter = async (id: string) => {
  return await _Services.fireStoreAPI.deleteDocument(fireStore, "fighter", id);
};
