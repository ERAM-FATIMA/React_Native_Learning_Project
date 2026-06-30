import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import { Text, View } from "react-native";
import Button from "../atoms/Button";

type StatusMenuContentProps = {
  handleSelectStatus: (status: TaskStatus) => void;
  setMenuVisible: (choice: boolean) => void;
};
export default function StatusMenuContent({
  handleSelectStatus,
  setMenuVisible,
}: StatusMenuContentProps) {
  const statuses: TaskStatus[] = ["done", "later", "to-do"];

  return (
    <View style={globalStyles.menuCard}>
      <Text style={globalStyles.menuTitle}>Move Task Status</Text>

      {statuses.map((status) => (
        <Button
          key={status}
          title={`Move to ${status}`}
          onPress={() => handleSelectStatus(status)}
          buttonStyle={globalStyles.optionButton}
          textStyle={globalStyles.optionText}
        />
      ))}

      <Button
        title="Close"
        onPress={() => setMenuVisible(false)}
        buttonStyle={globalStyles.cancelButton}
        textStyle={globalStyles.cancelText}
      />
    </View>
  );
}
