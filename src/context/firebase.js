import { createContext, useContext, useReducer } from "react";

const FirebaseContext = createContext();

export const FirebaseContextProvider = ({
  children,
  reducer,
  initialState,
}) => {
  return (
    <FirebaseContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </FirebaseContext.Provider>
  );
};

const useFirebaseValue = () => useContext(FirebaseContext);

export default useFirebaseValue;
