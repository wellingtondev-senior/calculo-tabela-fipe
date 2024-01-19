import { cn } from "../../../lib/utils";
import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuActionProps extends VariantProps<typeof menuAction> {
    className?: string;
    icon:ElementType
}

const menuAction = tv({
    base: "cursor-pointer  w-[40px] h-[40px] mb-8 bg-[#150124] hover:bg-[#290F3D]  border-[1px] border-[#10011B] rounded-lg shadow-lg flex items-center justify-center",
    
})

export const MenuAction = ({ className, icon:Icon}: MenuActionProps) => {
    return (
        <a className={cn(menuAction(), className)}>
            {<Icon className="fill-[#4cd137] w-[20px] h-[20px]"/>}
        </a>
    );
}

