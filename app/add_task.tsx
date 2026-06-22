import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TaskContext } from "./_layout";

export default function addTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [inputText, setInputText] = useState("");

  const handleAddTask = () => {
    if (inputText.trim() !== null) {
      setTasks((prevTasks: string[]) => [...prevTasks, inputText.trim()]);
    }
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Task"
        value={inputText}
        onChangeText={setInputText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleAddTask}>
        <Text style={styles.primaryButtonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#598bc0",
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
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
