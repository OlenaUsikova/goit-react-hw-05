// import {createStore, combineReducers} from "redux"
// import {usersReducer} from './Users/redusers'

// const rootReducer = combineReducers({
//     users: usersReducer
// })

// export const store = createStore(rootReducer)

import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Users/redusers";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'users',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, usersReducer)

  export const store = configureStore({
    reducer: {
      users: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);