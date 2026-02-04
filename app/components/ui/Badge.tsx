import React from "react";

export type BadgeVariant =
  | "default"
  | "purple"
  | "pink"
  | "emerald"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "coming-soon";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold";

  const variantStyles = {
    default: "bg-border text-ink",
    purple: "bg-purple-100 text-purple-700",
    pink: "bg-pink-100 text-pink-700",
    emerald: "bg-emerald-100 text-emerald-700",
    bronze: "bg-orange-100 text-orange-700",
    silver: "bg-gray-200 text-gray-700",
    gold: "bg-yellow-100 text-yellow-700",
    platinum: "bg-purple-200 text-purple-900",
    "coming-soon": "bg-pink-100 text-pink-600 border border-pink-300",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
