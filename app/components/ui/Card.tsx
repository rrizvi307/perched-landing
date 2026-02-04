import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300";

  const hoverStyles = hover
    ? "hover:scale-105 hover:shadow-2xl cursor-pointer"
    : "";

  const backgroundStyles = gradient
    ? "bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100"
    : "bg-white border-2 border-border";

  return (
    <div className={`${baseStyles} ${backgroundStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
