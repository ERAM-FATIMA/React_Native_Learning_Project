import { TaskStatus } from "@/app/_layout";
import React from "react";
import { Text, View } from "react-native";

type BadgeProps = {
  status: TaskStatus;
};

export default function Badge({ status }: BadgeProps) {
  const backgroundColor =
    status === "done" ? "#C8E6C9" : status === "later" ? "#E1BEE7" : "#FFE0B2";

  const textColor =
    status === "done" ? "#1B5E20" : status === "later" ? "#4A148C" : "#E65100";

  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontWeight: "700",
          color: textColor,
        }}
      >
        {status.toUpperCase()}
      </Text>
    </View>
  );
}
