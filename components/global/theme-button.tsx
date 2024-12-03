"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { FC } from "react";

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border rounded py-1 px-0.5">
      <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex items-center" />
    </div>
  );
};
