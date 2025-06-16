import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/Dashboard";
import { AnalyticsPage } from "./pages/analytics/Analytics";
import { SettingsPage } from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;