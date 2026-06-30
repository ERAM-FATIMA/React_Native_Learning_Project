import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { globalStyles } from "@/styles";
import { View } from "react-native";

type AddTaskScreenProps = {
  inputText: string;
  setInputText: (text: string) => void;
  handleAddTask: () => void;
};

export default function AddTaskScreen({
  inputText,
  setInputText,
  handleAddTask,
}: AddTaskScreenProps) {
  return (
    <View style={globalStyles.container}>
      <Input
        value={inputText}
        onChangeText={setInputText}
        placeholder="Add Task"
        style={globalStyles.input}
      />

      <Button
        title="Save Task"
        onPress={handleAddTask}
        buttonStyle={globalStyles.primaryButton}
        textStyle={globalStyles.primaryButtonText}
      />
    </View>
  );
}
