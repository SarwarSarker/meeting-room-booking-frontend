import { Button } from "../ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <SidebarTrigger />
      <div className="w-full flex items-center justify-end ">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-lg">
            &#60;
          </Button>
          <h2 className="text-2xl font-semibold">December 2024</h2>
          <Button variant="ghost" size="icon" className="text-lg">
            &#62;
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            ⚙️
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
