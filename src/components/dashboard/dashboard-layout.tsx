import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "./sidebar/sidebar"
import { Header } from "./header"

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}