import { User } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { FC } from "react";
import { AppContainer } from "./app-container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeButton } from "./theme-button";
import { SidebarTrigger } from "../ui/sidebar";

export const Header: FC = () => {
  return (
    <header className="border-b bg-sidebar">
      <AppContainer className="flex justify-between items-center gap-4 p-4">
        <Link href="/" className="text-2xl uppercase">
          Tossé
        </Link>
        <div className="flex items-center justify-center gap-2">
          <UserOptions />
          <Button variant={"outline"} asChild>
            <SidebarTrigger />
          </Button>
          <ThemeButton />
        </div>
      </AppContainer>
    </header>
  );
};

function UserOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={'icon'}>
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-normal">
          My Account
        </DropdownMenuLabel>
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
