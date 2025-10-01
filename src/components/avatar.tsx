import { cva, cx, type VariantProps } from "class-variance-authority"
import { getInitials } from "../utils/string"

const avatarVariants = cva(
  "inline-flex items-center justify-center uppercase rounded-full font-medium text-gray-600 select-none bg-blue-dark", 
  {
    variants: {
      variant: {
        mobile: "w-10 h-10 text-sm",
        desktop: "w-12 h-12 text-base",
        large: "w-16 h-16 text-lg"
      }
    },
    defaultVariants: {
      variant: "mobile"
    }
  }
)

interface AvatarProps extends VariantProps<typeof avatarVariants>{
    name?: string
    className?: string
}

export default function Avatar({variant, name, className}: AvatarProps){
    // REMOVIDO: const {user} = useUser()
    
    // Mock temporário
    const mockUser = {
      name: "João Silva"
    }

    const displayName = name || mockUser.name || 'User';

    return(
        <div 
            className={cx(avatarVariants({variant}), className)}
            title={displayName}
        >
           {getInitials(displayName)} 
        </div>
    )
}