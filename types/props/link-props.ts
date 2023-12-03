import { ReactNode } from "react";

export interface LinkProps {
  link: string;
  icon?: ReactNode;
  text?: string;
  altText?: string;
}