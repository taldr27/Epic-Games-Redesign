import React, { createContext } from 'react';
import { friendsArray } from '../constants';

const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  return (
    <FriendsContext.Provider value={{ friendsArray }}>
      {children}
    </FriendsContext.Provider>
  );
};

export { FriendsProvider, FriendsContext };
