"use client";

import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "../loading";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <div>
      <PersistGate loading={<Loading></Loading>} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </div>
  );
}

export default ReduxProvider;
