import { cn } from "../../../lib/utils";
import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuListaProps extends VariantProps<typeof menuList> {
    className?: string;
    icon:ElementType
}

const menuList = tv({
    base: "cursor-pointer  w-[40px] h-[40px] bg-[#150124] hover:bg-[#290F3D]  border-[1px] border-[#10011B] rounded-lg shadow-lg flex items-center justify-center",
    
})

export const MenuItem = ({ className, icon:Icon}: MenuListaProps) => {
    return (
        <a className={cn(menuList(), className)}>
            {<Icon className="fill-white w-[20px] h-[20px]"/>}
        </a>
    );
}

