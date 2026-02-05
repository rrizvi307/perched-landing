import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-purple text-white hover:bg-purple-600 active:bg-purple-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-white text-purple border-2 border-purple hover:bg-purple-50 active:bg-purple-100 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "bg-transparent text-ink border-2 border-border hover:bg-paper active:bg-border hover:scale-[1.02] active:scale-[0.98]",
    gradient:
      "btn-gradient text-white shadow-lg hover:shadow-glow-pink",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
