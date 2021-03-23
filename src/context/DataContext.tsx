import { createContext, ReactNode, useState } from "react";

interface IData {
  followers: number;
  following: number;
  repositories: number;
  portifolioLink: string;
  location: string;
  description: string;
  name: string;
  avatar: string;
  login: string;
}

interface IDataContext {
  data: IData;
  setData: (data: IData) => void;
}

export const DataContext = createContext({} as IDataContext);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData>(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
