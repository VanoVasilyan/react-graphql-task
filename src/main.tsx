import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App'
import './index.css'

const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
const endpoint = import.meta.env.VITE_GITHUB_ENDPOINT;

const client = new ApolloClient<unknown>({
  uri: endpoint,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>
)
