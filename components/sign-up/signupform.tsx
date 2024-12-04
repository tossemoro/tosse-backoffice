import Link from "next/link"
import { TypographyH4 } from "../ui/typographies"

export function SignUpForm() {
    return(
        <div className="flex items-center w-full border border-gray-400 bg-white rounded">
            <div className="flex items-center justify-betwen">
                <TypographyH4>
                    Inscription
                </TypographyH4>
                <div className="flex items-center gap-2">
                    <TypographyH4>
                        Tu as déjà un compte ?
                    </TypographyH4>
                    <TypographyH4>
                        <Link href="/connsxion">Connexion</Link>
                    </TypographyH4>
                </div>
            </div>
            <form>
                
            </form>
        </div>
    )
}