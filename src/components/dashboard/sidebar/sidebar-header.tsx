import { SidebarHeader as ShadSidebarHeader } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SidebarHeader() {
  return (
    <ShadSidebarHeader className="flex items-center justify-between p-4">
      <h1 className="text-lg font-semibold">Acme Inc</h1>
      <SidebarTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SidebarTrigger>
    </ShadSidebarHeader>
  );
}