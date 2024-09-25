import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LogSlice from "../src/UserReducer"
import { Auth0Provider } from '@auth0/auth0-react';
const store = configureStore({
  reducer: {
    LogInState: LogSlice
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-f3s3phzzcsgjvmu3.us.auth0.com"
    clientId="f3Kll8QNeA6wy2YWAq9oxG4Jtnlyvpe6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <Provider store={store}>
      <NavBar />
      <App />
    </Provider>

  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
