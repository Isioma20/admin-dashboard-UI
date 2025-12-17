import { ChevronsLeft, Search, Sun, Moon, Bell } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import ProfileImg from "../assets/profile-image.jpg";

const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="h-[60px] relative z-10 flex items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="input">
          <Search size={20} className="text-slate-300" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun size={20} className="dark:hidden" />
          <Moon size={20} className="hidden dark:block" />
        </button>
        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <button className="size-10 overflow-hidden rounded-full">
          <img src={ProfileImg} alt="profile image size-full object-cover" />
        </button>
      </div>
    </header>
  );
};
export default Header;
