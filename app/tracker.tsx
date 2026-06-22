import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TaskContext } from "./_layout";
import TaskItem from "./taskItem";

export default function TrackerApp() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [search, setSearch] = useState("");

  const deleteTask = (indexToDelete: number) => {
    setTasks((prevTasks: string[]) =>
      prevTasks.filter((item, currentIndex) => currentIndex !== indexToDelete),
    );
  };

  const filteredTasks = tasks.filter((task: string) =>
    task.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Tasks"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSearch("")}
        >
          <Text style={styles.clearButtonText}>clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            title={item}
            id={index}
            deleteTask={() => deleteTask(index)}
          />
        )}
      />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/add_task")}
      >
        <Text style={styles.primaryButtonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F2F9",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#fcdede",
    borderRadius: 8,
    marginLeft: 8,
  },
  clearButtonText: {
    color: "#FF3B30",
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: "#598bc0",
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "100%",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
