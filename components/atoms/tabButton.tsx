import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import React from "react";
import { Pressable, Text } from "react-native";

type TabButtonProps = {
  activeTab: TaskStatus;
  tabKey: TaskStatus;
  tabCount: number;
  onPress: (tab: TaskStatus) => void;
};

export default function TabButton({
  activeTab,
  tabKey,
  tabCount,
  onPress,
}: TabButtonProps) {
  const isActive = activeTab === tabKey;

  return (
    <Pressable
      onPress={() => onPress(tabKey)}
      style={({ pressed }) => [
        globalStyles.tabButton,
        isActive && globalStyles.activeTabButton,
        pressed && globalStyles.pressedFeedback,
      ]}
    >
      <Text
        style={isActive ? globalStyles.activeTabText : globalStyles.tabText}
      >
        {tabKey} ({tabCount})
      </Text>
    </Pressable>
  );
}
