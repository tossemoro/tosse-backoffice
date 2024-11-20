import { DashboardTitle } from "@/components/dashboard/global"
import Link from "next/link"

export default function Dashboard(){
    return(
        <>
        <DashboardTitle />
        <Link href="/messagerie">Message</Link>
        </>
    )
}