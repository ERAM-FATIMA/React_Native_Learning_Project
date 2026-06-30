import { Modal, View } from "react-native";

import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";

import StatusMenuContent from "../molecules/statusMenuContent";

type TaskStatusModalProps = {
  menuVisible: boolean;
  setMenuVisible: (choice: boolean) => void;
  handleSelectStatus: (status: TaskStatus) => void;
};

export default function TaskStatusModal({
  menuVisible,
  setMenuVisible,
  handleSelectStatus,
}: TaskStatusModalProps) {
  return (
    <Modal
      visible={menuVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setMenuVisible(false)}
    >
      <View style={globalStyles.backdrop}>
        <StatusMenuContent
          handleSelectStatus={handleSelectStatus}
          setMenuVisible={setMenuVisible}
        />
      </View>
    </Modal>
  );
}
