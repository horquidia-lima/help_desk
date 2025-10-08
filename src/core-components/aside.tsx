import { cva, cx, type VariantProps } from "class-variance-authority";
import Container from "../components/container";
import { ClipboardList, Users, BriefcaseBusiness, Wrench } from 'lucide-react'
import NavItem from "../components/navItem";
import React from "react";
import Avatar from "../components/avatar";
import Text from "../components/text";


const asideVariants = cva("flex flex-col h-screen", {
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
            <div className="flex flex-1 flex-col justify-between">
                <nav className="hidden md:flex flex-col">
                    <NavItem icon={ClipboardList}>Chamados</NavItem>
                    <NavItem icon={Users} variant="active">Técnicos</NavItem>
                    <NavItem icon={BriefcaseBusiness}>Clientes</NavItem>
                    <NavItem icon={Wrench}>Serviços</NavItem>
                </nav>

                <div className="hidden md:flex items-center gap-2 mt-auto">
                    <Avatar className="w-8 h-8"/>
                    <div className="flex flex-col">
                        <Text variant="body-sm" className="text-gray-600">Usuário Adm</Text>
                        <Text variant="body-xs" className="text-gray-400">user.adm@test.com</Text>
                    </div>
                </div>
            </div>
        </Container>
    )
}