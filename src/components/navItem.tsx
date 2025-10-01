import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import type React from "react"
import Text from "./text"

export const navItemVariants = cva("flex items-center gap-2 rounded-sm p-2 transition-colors cursor-pointer", {
    variants: {
        variant: {
            default: "text-gray-400 hover:text-white hover:bg-gray-100",
            active: "text-white bg-blue-dark"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

interface NavItemProps extends VariantProps<typeof navItemVariants> {
    icon?: LucideIcon
    children: React.ReactNode
    //onClick?: () => void
    //size
    //href
}

export default function NavItem({icon: IconComponent, variant, children}: NavItemProps){
    return(
        <a href="#" className={navItemVariants({variant})}>
            {IconComponent && <IconComponent className="w-5 h-5"/>}
            <Text variant="body-sm">{children}</Text>
        </a>
    )
}