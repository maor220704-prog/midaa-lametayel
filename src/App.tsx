import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityList from "./pages/CityList";
import CityPage from "./pages/CityPage";
import Dictionary from "./pages/Dictionary";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/city/:cityId" element={<CityPage />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}
