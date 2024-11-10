import { configureStore  } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';

import {productApi} from "lab10/store/services/product.api";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

setupListeners(store.dispatch);