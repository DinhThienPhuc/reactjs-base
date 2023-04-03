import {
  IFirebaseConfig,
  fireStoreAPI,
  getFireStore,
  initFirebaseApp,
} from "_libs/services";

import { IFighter } from "utils";

const firebaseConfig: IFirebaseConfig = {
  apiKey: "AIzaSyCmeVC8352EouzhFtYJASCO8YhZIFBS7Tg",
  authDomain: "kengan-fighters.firebaseapp.com",
  projectId: "kengan-fighters",
  storageBucket: "kengan-fighters.appspot.com",
  messagingSenderId: "322097054744",
  appId: "1:322097054744:web:5b93c4dddda9db56e86f6d",
  measurementId: "G-DT4F1GPC79",
};

const firebaseApp = initFirebaseApp(firebaseConfig);

const fireStore = getFireStore(firebaseApp);

export const getFighters = async () => {
  return await fireStoreAPI.getAllDocuments<IFighter[]>(fireStore, "fighter");
};

export const addFighter = async (data: IFighter) => {
  return await fireStoreAPI.addDocument<IFighter>(fireStore, "fighter", data);
};

export const getFighterById = async (id: string) => {
  return await fireStoreAPI.getDocumentById<IFighter>(fireStore, "fighter", id);
};

export const setFighter = async (data: IFighter) => {
  return await fireStoreAPI.setDocument(fireStore, "fighter", data);
};

export const deleteFighter = async (id: string) => {
  return await fireStoreAPI.deleteDocument(fireStore, "fighter", id);
};
