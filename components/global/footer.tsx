import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-4 text-center bg-sidebar border-t">© copyright @{new Date().getFullYear()} <Link href="/" className="border-b-2 hover:text-[#FF9D00]">Tossé</Link> | All rights reserved.</footer>
    )
}