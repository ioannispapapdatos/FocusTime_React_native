import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// List of items=FlatList
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || history.length)
    return <Text style={styles.title}>We haven t focus anything Get!! </Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Focus will be built Here!!!</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: "bold",
  },
  item: {
    fontSizes: fontSizes.md,
    paddingTop: spacing.sm,
  },
});
