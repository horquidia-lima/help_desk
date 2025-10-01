import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentType } from "react"

const iconVariants = cva("inline-block", {
    variants: {
        size: {
            md: "w-[20px] h-[20px]"
        },
        color: {
            default: "text-gray-600"
        }
    },
    defaultVariants: {
        size: "md",
        color: "default"
    }
})

interface IconProps extends VariantProps<typeof iconVariants>{
    icon: ComponentType<{className?: string}>
    className?: string
}

export default function Icon({icon: IconComp, size, color, className}: IconProps){
    return <IconComp className={cx(iconVariants({size, color}), className)}/>
}