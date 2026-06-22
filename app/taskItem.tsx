import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface taskItemsProps {
  title: string;
  id: number;
  deleteTask: () => void;
}

const TaskItem = ({ title, id, deleteTask }: taskItemsProps) => {
  return (
    <View style={styles.taskRow}>
      <TouchableOpacity style={styles.checkButton} onPress={deleteTask}>
        <Text>✅</Text>
      </TouchableOpacity>
      <Text style={styles.taskText}>{title}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  taskText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
    marginLeft: 10,
  },
  checkButton: {
    padding: 8,
    backgroundColor: "#E8F2F9",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
