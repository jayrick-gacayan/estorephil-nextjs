import { ReactNode } from "react";

export default function TabItem<T>({
  tab,
  currentTab,
  tabClassName,
  onTabChange,
  children,
}: {
  tab: T;
  currentTab: T;
  tabClassName: (tab: T, currentTab: T) => string;
  onTabChange: (tab: T) => void;
  children: ReactNode;
}) {
  return (
    <div className={`${tabClassName(tab, currentTab)} w-full`}
      onClick={() => { onTabChange(tab); }}>
      {children}
    </div>
  )
}