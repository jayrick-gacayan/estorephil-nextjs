import { ReactNode } from "react";

export interface BreadcrumbProps {
  link?: string;
  text: string;
  isLink?: boolean;
  withRightChevron?: boolean;
  otherPuncMarks?: ReactNode;
}