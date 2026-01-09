import { useTheme } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/95 py-2 border-b supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="climate logo"
            className="h-14"
          />
        </NavLink>
        <div>
          {/* search */}
          <div
            onClick={() => {
              setTheme(isDark ? "light" : "dark");
            }}
            className={`cursor-pointer ${
              isDark ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            {isDark ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-sky-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
