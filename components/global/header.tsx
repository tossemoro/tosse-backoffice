"use client";
import { PanelLeft, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FC } from "react";
import { AppContainer } from "./app-container";
import { Button } from "@/components/ui/button";

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`border-b-2 py-3`}>
      <AppContainer className="flex justify-between items-center">
        <Link href="/" className="text-2xl uppercase">
          Tossé
        </Link>
        <div className="flex items-center gap-2">
          <UserOptions />
          <Button variant={"outline"}>
            <PanelLeft className="h-8 w-8" />
          </Button>
          <Button variant={"outline"} className="px-2">
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function UserOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-normal">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/sign-in">Se connecter</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/sign-up">S&apos;inscrire</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
