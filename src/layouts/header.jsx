import { ChevronsLeft } from "lucide-react";

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <header className="h-[60px] relative z-10 flex items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
      </div>
    </header>
  );
};
export default Header;
