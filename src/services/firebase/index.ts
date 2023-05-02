import * as _Services from "_core/services";

import { IFighter } from "utils";

const firebaseConfig: _Services.IFirebaseConfig = {
  apiKey: "AIzaSyCmeVC8352EouzhFtYJASCO8YhZIFBS7Tg",
  authDomain: "kengan-fighters.firebaseapp.com",
  projectId: "kengan-fighters",
  storageBucket: "kengan-fighters.appspot.com",
  messagingSenderId: "322097054744",
  appId: "1:322097054744:web:5b93c4dddda9db56e86f6d",
  measurementId: "G-DT4F1GPC79",
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
