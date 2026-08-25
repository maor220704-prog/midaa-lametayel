import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityList from "./pages/CityList";
import CityPage from "./pages/CityPage";
import Dictionary from "./pages/Dictionary";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/city/:cityId" element={<CityPage />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <NavBar />
    </BrowserRouter>
  );
}
