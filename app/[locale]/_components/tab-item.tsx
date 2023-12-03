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
    <div className={`${tabClassName(tab, currentTab)} transition-all delay-100 w-full cursor-pointer`}
      onClick={() => { onTabChange(tab); }}>
      {children}
    </div>
  )
}