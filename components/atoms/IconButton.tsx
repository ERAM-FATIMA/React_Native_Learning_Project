import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type IconButtonProps = {
  icon: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function IconButton({
  icon,
  onPress,
  buttonStyle,
  textStyle,
}: IconButtonProps) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{icon}</Text>
    </TouchableOpacity>
  );
}
