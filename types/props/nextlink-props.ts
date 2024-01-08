import { ReactNode } from "react";

export interface NextLinkProps {
  link: string;
  altText: string;
  icon?: ReactNode;
  text?: string;
}