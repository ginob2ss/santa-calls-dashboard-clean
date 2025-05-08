import { useState, ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
};

export function Tabs({ children, defaultValue, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const list = Array.isArray(children) && children.find((child: any) => child.type.name === "TabsList");
  const content =
    Array.isArray(children) &&
    children.filter((child: any) => child.type.name === "TabsContent" && child.props.value === activeTab);

  return (
    <div className={className}>
      {list &&
        typeof list.type === "function" &&
        list.type({ ...list.props, activeTab, setActiveTab })}
      {content}
    </div>
  );
}
