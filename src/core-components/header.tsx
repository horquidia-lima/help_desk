import Container from "../components/container";
import Logo from "../assets/Logo_IconLight.svg?react"
import Text from "../components/text";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "../components/icon";
import { Menu } from "lucide-react";
import Avatar from "../components/avatar";

export const headerVariants = cva("flex items-center gap-1")

interface HeaderProps extends VariantProps<typeof headerVariants>{
    className?: string
}

export default function Header({className}: HeaderProps){
    return(
        <Container as="header" className={headerVariants({className})}>

            {/* Menu hamburguer só aparece no mobile */}
            <button className="md:hidden bg-gray-200 rounded-xs pt-1 px-2 pb-2 border-none cursor-pointer">
                <Icon icon={Menu} className="h-5 w-5"/>
            </button>

            <Logo className="h-11 w-11"/>
            <div className="flex flex-col">
                <Text as="h1" variant="body-lg" className="text-gray-600" weight="bold">HelpDesk</Text>
                <Text variant="body-xxs" className="text-blue-light uppercase" weight="bold">Admin</Text>
            </div>

            <Avatar className="md:hidden"/>
        </Container>
    )
}