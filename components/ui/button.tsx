import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-[24px] w-fit font-medium gap-[10px] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary-b300 text-white shadow-xs hover:bg-primary/90",
        outline:
          "border border-primary text-primary bg-background shadow-xs hover:bg-primary/90 hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        secondary: "bg-secondary text-white shadow-xs hover:bg-secondary/80",
        ghost: "hover:text-accent-foreground",
        link: "text-white underline-offset-4 hover:underline",
        none: "",
        light: "bg-white border border-neutral-n200 shadow-sm",
        outlineGray:
          "text-neutral-n700 border-neutral-n400 hover:text-neutral-900 hover:border-neutral-n500 bg-background border",
      },
      size: {
        default: "px-[32px] py-[11px] rounded-[8px]",
        full: "w-full h-[34px] rounded-[20px]",
        sm: "h-[30px] rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 w-full",
        lg: "px-[24px] py-[10px]",
        icon: "size-9",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
