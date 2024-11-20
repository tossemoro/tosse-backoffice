import Link from "next/link";

export function Footer() {
    return (
        <div className="text-[#FFFFFF] py-4 text-center bg-[#303030] mt-4">© copyright @ 2024 <Link href="/" className="border-b-2 hover:text-[#FF9D00]">Tossé</Link> | Allrightsreserved.</div>
    )
}