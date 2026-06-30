import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import React from "react";
import { View } from "react-native";
import TabButton from "../atoms/TabButton";

type TabBarProps = {
  activeTab: TaskStatus;
  tabCount: {
    laterCount: number;
    todoCount: number;
    doneCount: number;
  };
  setActiveTab: (tab: TaskStatus) => void;
};

export default function TabBar({
  activeTab,
  tabCount,
  setActiveTab,
}: TabBarProps) {
  const { laterCount, todoCount, doneCount } = tabCount;

  const tabs: { key: TaskStatus; count: number }[] = [
    { key: "later", count: laterCount },
    { key: "to-do", count: todoCount },
    { key: "done", count: doneCount },
  ];

  return (
    <View style={globalStyles.tabRow}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          activeTab={activeTab}
          tabKey={tab.key}
          tabCount={tab.count}
          onPress={setActiveTab}
        />
      ))}
    </View>
  );
}
