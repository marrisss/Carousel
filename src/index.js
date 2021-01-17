// import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// 2
const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql",
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
