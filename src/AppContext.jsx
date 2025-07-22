import { createContext, useMemo } from "react";
import useFetchData from "./hooks/useFetchData";

const AppContext = createContext({
  articles: [],
  category: "general",
  loading: true,
  error: "",
  handleSearchChange: () => {},
  handleNextButton: () => {},
  handlePreviousButton: () => {},
  onCategoryChange: () => {},
  pageNumber: Number,
});

export default function AppContextProvider(props) {
  const {
    articles,
    loading,
    error,
    handleSearchChange,
    handleNextButton,
    handlePreviousButton,
    pageNumber,
    onCategoryChange,
    category,
  } = useFetchData();

  const contextValue = useMemo(() => {
    return {
      articles,
      loading,
      error,
      handleSearchChange,
      handleNextButton,
      handlePreviousButton,
      pageNumber,
      onCategoryChange,
      category,
    };
  }, [
    articles,
    onCategoryChange,
    loading,
    error,
    handleSearchChange,
    pageNumber,
    category,
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
export { AppContext };
