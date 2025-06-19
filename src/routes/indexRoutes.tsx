import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
export const indexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
