import { NavLink } from 'react-router-dom';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Check Calendar',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Concerns',
    url: '/concerns',
    icon: Inbox,
  },
  {
    title: 'Meeting Rooms',
    url: '/meeting-rooms',
    icon: Inbox,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: Search,
  },
  {
    title: 'Requests',
    url: '/requests',
    icon: Settings,
  },
  {
    title: 'Meeting Details',
    url: '/meeting-details',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-2xl font-bold py-12 border-b border-sidebar-border'>MoMagice BD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}