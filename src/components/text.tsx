import { cva, type VariantProps } from "class-variance-authority";
import React, { type ReactNode } from "react";

export const textVariants = cva("font-family-base leading-[1.4]", {
    variants: {
        variant: {
            "body-xxs": "text-[10px]",
            "body-xs": "text-xs",
            "body-sm": "text-sm",
            "body-md": "text-base",
            "body-lg": "text-lg",
            "body-xl": "text-xl",
            "body-2xl": "text-2xl"
        },
        weight: {
            "normal": "font-normal",
            "bold": "font-bold"
        },
    },
    defaultVariants: {
        variant: "body-md",
        weight: "normal"
    }
})

interface TextProps extends VariantProps<typeof textVariants>{
    as?: keyof React.JSX.IntrinsicElements // Permite escolher HTML tag
    className?: string // Classes CSS extras
    children?: ReactNode // Conteúdo interno
}

export default function Text({as="span", variant, weight, className, children, ...props}: TextProps){
    return React.createElement(
        as,
        {
            className: textVariants({variant, weight, className}),
            ...props
        },
        children
    )
}