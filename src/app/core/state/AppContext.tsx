/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const AppContext = createContext<any>();

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
