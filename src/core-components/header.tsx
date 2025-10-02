import Container from "../components/container";
import Logo from "../assets/Logo_IconLight.svg?react"
import Text from "../components/text";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "../components/icon";
import { Menu, X } from "lucide-react";
import Avatar from "../components/avatar";
import { useState } from "react";

import { ClipboardList, Users, BriefcaseBusiness, Wrench } from 'lucide-react'
import NavItem from "../components/navItem";

export const headerVariants = cva("flex items-center relative gap-1 justify-between p-4")

interface HeaderProps extends VariantProps<typeof headerVariants>{
    className?: string
}

export default function Header({className}: HeaderProps){
    const [open, setOpen] = useState(false)

    return(
        <Container as="header" className={headerVariants({className})}>
            <div className="flex gap-1.5">
                <button 
                    className="md:hidden bg-gray-200 flex items-center justify-center rounded-xs w-10 h-10 border-none cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <Icon icon={open ? X : Menu} className="h-5 w-5"/>
                </button>
                <Logo className="h-11 w-11"/>
                <div className="flex flex-col">
                    <Text as="h1" variant="body-lg" className="text-gray-600" weight="bold">HelpDesk</Text>
                    <Text variant="body-xxs" className="text-blue-light uppercase" weight="bold">Admin</Text>
                </div>
            </div>

            <Avatar className="md:hidden"/>

            {/* Menu mobile dropdown */}
            {open && (
                <nav className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-2 md:hidden">
                    <NavItem icon={ClipboardList}>Chamados</NavItem>
                    <NavItem icon={Users}>Técnicos</NavItem>
                    <NavItem icon={BriefcaseBusiness}>Clientes</NavItem>
                    <NavItem icon={Wrench}>Serviços</NavItem>
                </nav>
            )}
        </Container>
    )
}