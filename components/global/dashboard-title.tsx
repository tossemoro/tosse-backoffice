import { TypographyH4 } from "@/components/ui/typographies";
import { cn } from "@/lib/utils";

interface Props {
    title?: string;
    className?: string;
}

export function DashboardTitle({ title, className }: Props) {
    return (
        <TypographyH4 className={cn("sm:text-2xl mx-10 lg:text-3xl leading-6 sm:leading-8 mb-7 font-normal", className)}>
            {title || 'Dashboard titre'}
            <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
        </TypographyH4>
    )
}