"use client"
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

type HeaderProps = {
    isDarkMode?: boolean;
};

const Header: FC<HeaderProps> = ({ isDarkMode }) => {
    const { theme, setTheme } = useTheme();

    return (
        <header
            className={`border-b-2 text-[1rem] py-3 ${isDarkMode ? "bg-gray-800 text-white" : ""
                }`}
        >
            <div className="flex justify-between items-center sm:mx-44">
                <Link href="/" className="text-[2rem] uppercase">
                    Tossé
                </Link>
                <div className="flex items-center gap-2">
                    <Select>
                        <SelectTrigger className="hover:bg-[#FF9D00]">
                            <User />
                        </SelectTrigger>
                        <SelectContent className="bg-[#FFE6BF]">
                            <SelectItem value="connectre">
                                <Link href="/signinform">
                                    Se connecter
                                </Link>
                            </SelectItem>
                            <SelectItem value="inscrire">
                                <Link href="/signupform">
                                    S&apos;inscrire
                                </Link>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <div
                        className="flex w-full items-center hover:bg-[#FF9D00] justify-between whitespace-nowrap rounded-md border border-input bg-transparent h-[2.5rem] px-2 py-2 text-sm shadow-sm"
                    >
                        <PanelLeft />
                    </div>
                    <div className="flex w-full items-center hover:bg-[#FF9D00] justify-between whitespace-nowrap rounded-md border border-input bg-transparent h-[2.5rem] px-2 py-2 text-sm shadow-sm">
                        <Switch id="airplane-mode"  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;