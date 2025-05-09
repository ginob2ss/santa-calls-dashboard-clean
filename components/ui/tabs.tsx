"use client";

import React, { useState, ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
};

type TabsListProps = {
  children: ReactNode[];
  activeTab: string;
  setActiveTab: (value: string) => void;
  className?: string;
};

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

const Tabs = ({ children, defaultValue, className = "" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const childrenArray = React.Children.toArray(children);

  const list = childrenArray.find(
    (child: any) => child.type?.name === "TabsList"
  );

  const content = childrenArray.filter(
    (child: any) =>
      child.type?.name === "TabsContent" &&
      child.props.value === activeTab
  );

  return (
    <div className={className}>
      {list &&
        React.cloneElement(list as React.ReactElement, {
          activeTab,
          setActiveTab,
        })}
      {content}
    </div>
  );
};

export default Tabs;

export function TabsList({
  children,
  activeTab,
  setActiveTab,
  className = "",
}: TabsListProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          isActive: child.props.value === activeTab,
          onClick: () => setActiveTab(child.props.value),
        })
      )}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  isActive,
  onClick,
}: TabsTriggerProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: TabsContentProps) {
  return <div className="mt-4">{children}</div>;
}
