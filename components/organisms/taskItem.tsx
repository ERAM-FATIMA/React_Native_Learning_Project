import React, { useState } from "react";
import { View } from "react-native";

import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";

import IconButton from "@/components/atoms/IconButton";
import EditTaskContent from "@/components/molecules/EditTaskContent";
import TaskActions from "@/components/molecules/TaskActions";
import TaskStatusModal from "@/components/organisms/taskStatusModal";

interface TaskItemProps {
  title: string;
  id: string;
  task_status: TaskStatus;
  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
  updateTask: (id: string, newStatus: TaskStatus) => void;
}

const TaskItem = React.memo(
  ({
    title,
    id,
    task_status,
    deleteTask,
    editTask,
    updateTask,
  }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleSave = () => {
      editTask(id, editText);
      setIsEditing(false);
    };

    const handleSelectStatus = (status: TaskStatus) => {
      updateTask(id, status);
      setMenuVisible(false);
    };

    return (
      <View style={globalStyles.taskRow}>
        <IconButton
          icon="⋮"
          onPress={() => setMenuVisible(true)}
          buttonStyle={globalStyles.checkButton}
          textStyle={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        />

        <EditTaskContent
          isEditing={isEditing}
          editText={editText}
          setEditText={setEditText}
          title={title}
          task_status={task_status}
        />

        <TaskActions
          isEditing={isEditing}
          handleSave={handleSave}
          setIsEditing={setIsEditing}
          onDelete={() => deleteTask(id)}
        />

        <TaskStatusModal
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
          handleSelectStatus={handleSelectStatus}
        />
      </View>
    );
  },
);

export default TaskItem;
