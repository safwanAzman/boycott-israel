"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun , Moon} from "lucide-react"

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <div>
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-sm font-semibold flex items-center space-x-2  hover:scale-110">
                {
                theme === "light" ?
                <>
                    <Moon className="w-5 h-5 text-gray-800" />
                    <p className="text-gray-800">Dark</p>
                </>
                :
                <>
                    <Sun className="w-5 h-5 text-orange-500" />
                    <p className="text-orange-500">Light</p>
                </>
            }
            </button>
        </div>
    );
};