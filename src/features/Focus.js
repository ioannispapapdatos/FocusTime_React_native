import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

function Focus({ addSubject }) {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Timer Application</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="what you like to do?"
          placeholder="hello"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          {/* addSubject from app.js and subject from useState */}
          <RoundedButton
            title="+"
            size={60}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
}

export default Focus;

const styles = StyleSheet.create({
  container: {
    // flex: 0.1,
    // alignItems: "center",
  },
  text: {
    color: "black",
  },
  textInput: {
    flex: 1,
    padding: 10,
    marginRight: spacing.sm,

    // justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: "row",
    width: "80%",
  },
  button: {
    justifyContent: "center",
  },
});
