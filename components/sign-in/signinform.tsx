"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { TypographyH4 } from "../ui/typographies"

export const SignInForm =  () => {
    const router = useRouter()
    return(
        <div className="m-auto space-y-4">
        <TypographyH4 className="bg-primary text-white text-center p-2 rounded">
            Inscription
        </TypographyH4>
        <form className="pt-8 pb-5 space-y-4 w-full border border-gray-400 bg-white rounded px-4">
            <Input
                placeholder="toosemoro@gmail.com"
                type="email"
                id="email"
            />
            <Input
                placeholder="Mot de passe"
                type="password"
                id="password"
            />
            <Button type="submit" onClick={() => router.push('/')}>S&apos;inscrire</Button>
        </form>
    </div>
    )
}