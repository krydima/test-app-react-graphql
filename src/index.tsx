import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter, HashRouterProps } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './apollo/client';

const Router = (process.env.REACT_APP_ROUTER === 'hash'
  ? HashRouter
  : BrowserRouter) as React.ElementType<HashRouterProps>;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Router basename={process.env.PUBLIC_URL}>
        <Application />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
