import { forwardRef } from "react";
import { cn } from "../utilities/cn";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { navbarLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Sidebar = forwardRef(({ collapsed }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logoLight} alt="administrator" className="dark:hidden" />
        <img
          src={logoDark}
          alt="administrator"
          className=" hidden dark:block"
        />
        {!collapsed && (
          <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
            Administrator
          </p>
        )}
      </div>
      <div className="flex flex-col w-fullgap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
        {navbarLinks.map((navbarLink) => (
          <nav key={navbarLink.title} className={cn("sidebar-group")}>
            <p className={cn("sidebar-group-title")}>{navbarLink.title}</p>
            {navbarLink.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
              >
                <link.icon size={22} className="flex-shrink-0" />
                {!collapsed && (
                  <p className="whitespace-nowrap">{link.label}</p>
                )}
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
