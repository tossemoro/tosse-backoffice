import { TypographyH4 } from "@/components/ui/typographies";
import { cn } from "@/lib/utils";

interface Props {
    title?: string;
    className?: string;
}

export function DashboardTitle({ title, className }: Props) {
    return (
        <TypographyH4 className={cn("text-2xl sm:text-4xl lg:text-6xl font-semibold leading-[2rem] sm:leading-[3rem] text-black mb-[2rem]", className)}>
            {title || 'Dashboard titre'}
            <div className="bg-primary h-1.5 w-[5rem] mx-auto md:mx-0 my-4"></div>
        </TypographyH4>
    )
}