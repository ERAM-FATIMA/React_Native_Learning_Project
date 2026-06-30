import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
