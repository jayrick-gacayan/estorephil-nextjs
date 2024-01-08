import { ReactNode } from "react";

export default function PageIconButton({
  icon,
  pageCondition,
  onClick,
  onPageCondition,
}: {
  icon: ReactNode;
  pageCondition: boolean;
  onPageCondition: (condition: boolean) => string;
  onClick: () => void;
}) {
  return (
    <div className={onPageCondition(pageCondition)}
      onClick={onClick}>
      {icon}
    </div>
  )
}