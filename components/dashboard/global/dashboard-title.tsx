import { TypographyH4 } from "@/components/ui/typographies";
import { cn } from "@/lib/utils";

interface Props {
    title?: string;
    className?: string;
}

export function DashboardTitle({ title, className }: Props) {
    return (
        <TypographyH4 className={cn("sm:text-2xl items-center mx-10 mt-10 lg:text-6xl font-semibold leading-[2rem] sm:leading-[3rem mb-[2rem]", className)}>
            {title || 'Dashboard titre'}
            <div className="bg-[#FF9D00] h-1.5 w-[5rem] my-4"></div>
        </TypographyH4>
    )
}