import { Routes, Route } from "react-router-dom";
import SearchComponent from "./components/MainSearchComponent/SearchComponent";

// import SearchResults from "./components/SearchResults";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchResults from "./components/SearchResults";
import { createContext } from "react";
import useStore from "./store";
import ErrorPage from "./components/ErrorPage";

const queryClient = new QueryClient();
export const StoreContext = createContext({});

function App() {
  const store = useStore();
  const searchParams = store.searchParams;

  return (
    <StoreContext.Provider value={{ searchParams }}>
      <QueryClientProvider client={queryClient}>
        <div className="flex h-screen justify-center bg-gray-700">
          <Routes>
            <Route path="/" element={<SearchComponent />} />
            <Route path={`/iyideba-manqanebi`} element={<SearchResults />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </StoreContext.Provider>
  );
}

export default App;
