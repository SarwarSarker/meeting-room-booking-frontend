import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { SidebarHeader } from "./sidebar-header"
import { SidebarNav } from "./sidebar-nav"
import { SidebarUser } from "./sidebar-user"

export function DashboardSidebar() {
  return (
    <SidebarProvider>
      <Sidebar className="w-[250px] border-r">
        <SidebarContent className="flex flex-col h-full">
          <SidebarHeader />
          <div className="flex-1 overflow-auto">
            <SidebarNav />
          </div>
          <SidebarFooter className="p-4">
            <SidebarUser />
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}