import { createContext, useMemo, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [tab, setTab] = useState(1);
  const [subtab, setSubtab] = useState(1);
  const contextValue = useMemo(() => ({ tab, setTab, subtab, setSubtab }), [tab, subtab]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;