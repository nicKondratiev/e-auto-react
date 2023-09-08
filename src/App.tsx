import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex h-screen justify-center bg-gray-700">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/iyideba-manqanebi" element={<div>All Cars</div>} />
        <Route path={`/iyideba-manqanebi/:manu/:model/:location`} />
      </Routes>
    </div>
  );
}

export default App;
