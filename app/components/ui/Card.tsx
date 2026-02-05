import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
  glass = false,
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300";

  const hoverStyles = hover
    ? "card-hover cursor-pointer"
    : "";

  let backgroundStyles = "bg-white border border-border";

  if (gradient) {
    backgroundStyles = "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100";
  } else if (glass) {
    backgroundStyles = "glass-card";
  }

  return (
    <div className={`${baseStyles} ${backgroundStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
