import { useState } from "react";

export function Tabs({ children, defaultValue, className = "" }) {

  const [activeTab, setActiveTab] = useState(defaultValue);
  const list = children.find(child => child.type.name === "TabsList");
  const content = children.filter(child => child.type.name === "TabsContent" && child.props.value === activeTab);
  return (
  <div className={className}>
    {list}
    {content}
  </div>
);

}

export function TabsList({ children, activeTab, setActiveTab, className = "" }) {
  return (<div className={className}>{children.map((child) => typeof child.type === "function" ? child.type({ ...child.props, isActive: child.props.value === activeTab, onClick: () => setActiveTab(child.props.value) }) : null)}</div>);
}

export function TabsTrigger({ value, children, isActive, onClick }) {
  return (<button className={`px-4 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-600 text-white" : "bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white"}`} onClick={onClick}>{children}</button>);
}

export function TabsContent({ value, children }) {
  return <div className="mt-4">{children}</div>;
}
