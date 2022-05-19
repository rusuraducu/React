import React, { createContext, useState } from 'react';

const MyApplicationContext = createContext();

export function MyContextProvider({ children }) {
  return (
    <MyApplicationContext.Provider value={{ item: 'This is a value from CONTEXT!' }}>
      {children}
    </MyApplicationContext.Provider>
  );
}

export default MyApplicationContext;
