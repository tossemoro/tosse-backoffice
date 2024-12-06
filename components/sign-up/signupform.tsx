import { TypographyH4 } from "../ui/typographies"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SignUpForm() {
    return (
        <div className="max-auto">
            <TypographyH4 className="bg-primary text-white">
                Inscription
            </TypographyH4>
            <form className="pt-8 pb-5 space-y-4 w-[100%] border border-gray-400 bg-white rounded">
                <Input
                    placeholder="Nom"
                    type="text"
                    id="email"
                />
                <Input
                    placeholder="hassan@gmail.com"
                    type="email"
                    id="email"
                />
                <Input
                    placeholder="Mot de passe"
                    type="password"
                    id="password"
                />
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Administrateur" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="administrateur">Administrateur</SelectItem>
                            <SelectItem value="stagaire">Stagaire</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button type="submit">S&apos;inscrire</Button>
            </form>
        </div>
    )
}