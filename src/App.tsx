// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { Home } from "lucide-react";
import { AnalyticsPage } from "./pages/analytics/Analytics";
import CalendarDashboard from "./pages/calendar/CalendarDashboard";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MeetingRoomBooking from "./pages/MeetingRoom/MeetingRoomBooking";

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <main className="flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<CalendarDashboard />} />
              <Route path="/meeting-rooms" element={<MeetingRoomBooking />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}
