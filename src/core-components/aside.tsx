import { cva, cx, type VariantProps } from "class-variance-authority";
import Container from "../components/container";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from 'lucide-react'
import NavItem from "../components/navItem";
import React from "react";


const asideVariants = cva("h-full", {
    variants: {
        variant: {
            desktop: "w-[200px]",
            mobile: "w-[64px]"
        }
    },
    defaultVariants: {
        variant: "desktop"
    }
})

interface AsideProps extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof asideVariants> {
        children?: React.ReactNode
    }

export default function SideBar({className, variant,children, ...props}: AsideProps){
    return(
        <Container as="aside" className={cx(asideVariants({variant}), className)} {...props}>
            {children}
            <nav className="hidden md:flex flex-col">
                <NavItem icon={ClipboardList}>Chamados</NavItem>
                <NavItem icon={Users} variant="active">Técnicos</NavItem>
                <NavItem icon={BriefcaseBusiness}>Clientes</NavItem>
                <NavItem icon={Wrench}>Serviços</NavItem>
            </nav>
        </Container>
    )
}