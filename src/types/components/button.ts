import React from "react";

export type ButtonPropType = {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  className?: string;
  startIcon?:
    | "local_grocery_store"
    | "local_cafe"
    | "local_hotel"
    | "mail"
    | "mail_outline"
    | "map"
    | "key"
    | "inventory"
    | "info"
    | "hotel"
    | "home"
    | "headphones"
    | "cancel";
  endIcon?:
    | "local_grocery_store"
    | "local_cafe"
    | "local_hotel"
    | "mail"
    | "mail_outline"
    | "map"
    | "key"
    | "inventory"
    | "info"
    | "hotel"
    | "home"
    | "headphones"
    | "cancel";
};
