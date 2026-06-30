import { globalStyles } from "@/styles";
import React from "react";
import { View } from "react-native";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

type SearchContainerProps = {
  search: string;
  setSearch: (text: string) => void;
};

export default function SearchContainer({
  search,
  setSearch,
}: SearchContainerProps) {
  return (
    <View style={globalStyles.searchContainer}>
      <Input
        value={search}
        onChangeText={setSearch}
        placeholder="Search Tasks"
        style={globalStyles.searchInput}
      />

      <Button
        title="Clear"
        onPress={() => setSearch("")}
        buttonStyle={globalStyles.clearButton}
        textStyle={globalStyles.clearButtonText}
      />
    </View>
  );
}
