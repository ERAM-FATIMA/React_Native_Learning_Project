import React from "react";
import { TextInput, TextStyle } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: TextStyle;
  placeholderTextColor?: string;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
};

export default function Input({
  value,
  onChangeText,
  placeholder,
  style,
  placeholderTextColor = "#999",
  autoFocus = false,
  onSubmitEditing,
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style}
      placeholderTextColor={placeholderTextColor}
      autoFocus={autoFocus}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
