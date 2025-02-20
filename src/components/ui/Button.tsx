import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  variant?: "default" | "outline";
}

export function Button({ children, asChild, variant = "default", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const baseStyle = "px-4 py-2 rounded font-medium transition";
  const variantStyle =
    variant === "outline"
      ? "border border-white text-white hover:bg-white hover:text-black"
      : "bg-blue-600 hover:bg-blue-700 text-white";

  return (
    <Comp className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </Comp>
  );
}
