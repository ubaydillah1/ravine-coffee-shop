"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow,background-color]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive:
          "border-transparent bg-accent-r100 text-accent-r500 hover:bg-accent-r200",
        outline:
          "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",

        success:
          "border-transparent bg-accent-g100 text-accent-g500 hover:bg-accent-g200",
        warning:
          "border-transparent bg-accent-y100 text-accent-y500 hover:bg-accent-y200",
        info: "border-transparent bg-accent-blue100 text-accent-blue500 hover:bg-accent-blue200",
        danger:
          "border-transparent bg-accent-r100 text-accent-r500 hover:bg-accent-r200",

        category:
          "rounded-full px-3 py-1 text-sm border-transparent bg-primary-b100/80 text-primary-b500/90 hover:bg-primary-b100 hover:text-primary-b500",
        categorySolid:
          "rounded-full px-3 py-1 text-sm border-transparent bg-primary-b100 text-primary-b500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
