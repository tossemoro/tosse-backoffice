"use client";
import { PanelLeft, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import * as React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { FC } from "react";
import { AppContainer } from "./app-container";
import { Button } from "@/components/ui/button";

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`border-b-2 py-3 `}>
      <AppContainer className="flex justify-between items-center">
        <Link href="/" className="text-2xl uppercase">
          Tossé
        </Link>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="hover:bg-primary">
              <User />
            </SelectTrigger>
            <SelectContent className="bg-[#FFE6BF]">
              <SelectItem value="connectre">
                <Link href="/" target="_blank">
                  Se connecter
                </Link>
              </SelectItem>
              <SelectItem value="inscrire">
                <Link href="/" target="_blank">
                  S&apos;inscrire
                </Link>
              </SelectItem>
            </SelectContent>
          </Select>
          <Button variant={"outline"}>
            <PanelLeft className="h-8 w-8" />
          </Button>
          <Button variant={"outline"} className="px-2" >
            <Switch
              id="airplane-mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </Button>
        </div>
      </AppContainer>
    </header>
  );
};
