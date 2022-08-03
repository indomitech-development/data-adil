import React from "react";

const createAuthStateContext = React.createContext(undefined);
const createAuthDispatchContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handelChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <createAuthStateContext.Provider value={isAuthenticated}>
      <createAuthDispatchContext.Provider value={handelChange}>
        {children}
      </createAuthDispatchContext.Provider>
    </createAuthStateContext.Provider>
  );
}

const useCreateAuthStateContext = () => {
  const context = React.useContext(createAuthStateContext);
  if (context == undefined) {
    throw Error("use createAuthStateContext must be inside the AuthProvider");
  }
  return context;
};

const useCreateAuthDispatchContext = () => {
  const context = React.useContext(createAuthDispatchContext);
  if (context == undefined) {
    throw Error(
      "use createAuthDispatchContext must be inside the AuthProvider"
    );
  }
  return context;
};
const useAuthContext = () => {
  return [useCreateAuthStateContext(), useCreateAuthDispatchContext()];
};

export {
  AuthProvider,
  useCreateAuthStateContext,
  useCreateAuthDispatchContext,
  useAuthContext,
};
