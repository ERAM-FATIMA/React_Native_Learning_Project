import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import Input from "../atoms/Input";
import TaskDetails from "./taskDetails";

type Props = {
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  title: string;
  task_status: TaskStatus;
};

export default function EditTaskContent({
  isEditing,
  editText,
  setEditText,
  title,
  task_status,
}: Props) {
  return isEditing ? (
    <Input
      value={editText}
      onChangeText={setEditText}
      style={globalStyles.taskText}
      autoFocus
    />
  ) : (
    <TaskDetails title={title} task_status={task_status} />
  );
}
