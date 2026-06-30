import { globalStyles } from "@/styles";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";

type Props = {
  isEditing: boolean;
  handleSave: () => void;
  setIsEditing: (value: boolean) => void;
  onDelete: () => void;
};

export default function TaskActions({
  isEditing,
  handleSave,
  setIsEditing,
  onDelete,
}: Props) {
  return (
    <>
      <Button
        title={isEditing ? "Save" : "Edit"}
        onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
        buttonStyle={globalStyles.actionButton}
        textStyle={globalStyles.actionButtonText}
      />

      <IconButton
        icon="❌"
        onPress={onDelete}
        buttonStyle={globalStyles.checkButton}
        textStyle={globalStyles.actionButtonText}
      />
    </>
  );
}
