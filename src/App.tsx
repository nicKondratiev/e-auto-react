import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchResults from "./components/SearchResults";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen justify-center bg-gray-700">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path={`/iyideba-manqanebi`} element={<SearchResults />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
