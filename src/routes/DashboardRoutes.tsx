import { Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardRoutes() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
