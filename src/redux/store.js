import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsSlice from "./contacts/contactsSlice";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
