import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer, getStoredState } from "redux-persist";
import { composeWithDevTools } from "@redux-devtools/extension";

import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { documentDirectory, EncodingType } from "expo-file-system";
import { createExpoFileSystemStorage } from "redux-persist-expo-file-system-storage";

import authReducer from "./Rootreducers/AuthReducer";
import rootReducer from "./Rootreducers/index";

// Create the new storage using expo-file-system
const expoFileSystemStorage = createExpoFileSystemStorage({
  storagePath: `${documentDirectory}keyValueStore.json`,
  encoding: EncodingType.UTF8,
  debug: false,
});

//

// Persist configuration
const persistConfig = {
  key: "root",
  storage: expoFileSystemStorage, // Use new storage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
