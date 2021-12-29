import React, { createContext, useContext, useState } from "react";

interface SearchProviderProps {
  children: React.ReactNode;
}
interface Context {
  searchVal: string;
  handleSetSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchContext = createContext<Context>(null!);

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchVal, setSearchVal] = useState("");

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ searchVal, handleSetSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
