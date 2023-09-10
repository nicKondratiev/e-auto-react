import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import CarDetails from "./components/CarDetails";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen justify-center bg-gray-700">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path={`/iyideba-manqanebi/:manu?/:model?/:location?`}
            element={<CarDetails />}
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
