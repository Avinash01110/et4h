import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Ensure this path is correct
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
// import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </>
);
