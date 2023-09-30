import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchResults from "./components/SearchResults";
import { createContext } from "react";
import useStore from "./store";

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
            <Route path="/" element={<Search />} />
            <Route path={`/iyideba-manqanebi`} element={<SearchResults />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </StoreContext.Provider>
  );
}

export default App;
