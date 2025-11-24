import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neonBlue disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-neonBlue text-bg shadow-lg hover:shadow-xl hover:shadow-neonBlue/50 active:scale-95 border border-neonBlue/20",
        destructive:
          "bg-retroMagenta text-bg shadow-lg hover:shadow-xl hover:shadow-retroMagenta/50 border border-retroMagenta/20",
        outline:
          "border-2 border-panelHighlight bg-surfaceRetro/40 text-textPrimary hover:border-neonGreen hover:text-neonGreen hover:shadow-lg hover:shadow-neonGreen/30 transition-all",
        secondary:
          "bg-surfaceRetro/60 text-textPrimary border-2 border-panelHighlight/80 hover:border-neonGreen hover:shadow-lg hover:shadow-neonGreen/30 active:scale-95",
        ghost: "text-textPrimary hover:bg-panelHighlight/30 hover:text-neonBlue",
        link: "text-neonBlue underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
