import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Correct import
import { persistStore } from "redux-persist"; // Correct import

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        {/* Use persistor directly */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
