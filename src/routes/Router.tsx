import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
