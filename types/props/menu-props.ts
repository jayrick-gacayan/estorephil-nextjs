import { ReactNode } from "react";

export interface MenuProps {
  link?: string;
  text: string;
  icon?: ReactNode;
  subMenus?: MenuProps[];
  alt: string;
}