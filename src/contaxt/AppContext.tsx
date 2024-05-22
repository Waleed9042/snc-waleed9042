import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useContext,
} from "react";

interface ContextValue {
  enableLogs: boolean;
  toggleEnableLogState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<ContextValue | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState<boolean>(true);
  const toggleEnableLogState = () => {
    setEnableLogs((prev: boolean) => !prev);
  };
  return (
    <AppContext.Provider value={{ enableLogs, toggleEnableLogState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): ContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "For using useAppContext please wrap you component in AppContextProvider",
    );
  }
  return context;
};

export default AppContext;
