import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import React from "react";
import { Text, View } from "react-native";
import Badge from "../atoms/Badge";

type TaskDetailsProps = {
  title: string;
  task_status: TaskStatus;
};

export default function TaskDetails({ title, task_status }: TaskDetailsProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 4,
        paddingHorizontal: 4,
      }}
    >
      <Text style={globalStyles.taskText}>{title}</Text>

      <Badge status={task_status} />
    </View>
  );
}
