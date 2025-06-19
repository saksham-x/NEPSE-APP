import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignupPage from "../pages/auth/SignupPage";
import DashboardRoutes from "./DashboardRoutes";
import DashboardHome from "../pages/dashboard";
import MarketPage from "../pages/dashboard/MarketPage";
import PortfolioPage from "../pages/dashboard/PortfolioPage";
import GoalsPage from "../pages/dashboard/GoalsPage";
import LearnPage from "../pages/dashboard/LearnPage";
import SettingsPage from "../pages/dashboard/SettingsPage";

type Props = {};

const MyRoutes = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<DashboardRoutes />}>
          <Route index element={<DashboardHome />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
