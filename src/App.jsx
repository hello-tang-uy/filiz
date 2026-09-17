import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { BlankPage } from "./pages/BlankPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<BlankPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
