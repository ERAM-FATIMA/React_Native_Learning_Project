import { globalStyles } from "@/styles";
import { router } from "expo-router";
import { View } from "react-native";

import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import Input from "../atoms/Input";

type Props = {
  newTitle: string;
  setNewTitle: (text: string) => void;
  handleInlineSubmit: () => void;
};

export default function InlineAddTask({
  newTitle,
  setNewTitle,
  handleInlineSubmit,
}: Props) {
  return (
    <View style={globalStyles.inlineAddRow}>
      <IconButton
        icon="+"
        onPress={() => router.push("/add_task")}
        buttonStyle={globalStyles.smallPlusButton}
        textStyle={globalStyles.plusButtonText}
      />

      <Input
        value={newTitle}
        onChangeText={setNewTitle}
        placeholder="Type to quick-add a task..."
        style={globalStyles.inlineInput}
        onSubmitEditing={handleInlineSubmit}
      />

      {newTitle.trim() !== "" && (
        <Button
          title="Add"
          onPress={handleInlineSubmit}
          buttonStyle={globalStyles.inlineAddButton}
          textStyle={globalStyles.inlineAddButtonText}
        />
      )}
    </View>
  );
}
