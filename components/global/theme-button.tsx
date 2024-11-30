"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { FC } from "react";

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </>
  );
};
