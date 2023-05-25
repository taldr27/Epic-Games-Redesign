import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { friendsArray } from './constants';

export const FriendsContext = createContext();

const dataArray = friendsArray;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendsContext.Provider value={dataArray}>
      <App />
    </FriendsContext.Provider>
  </React.StrictMode>
);
