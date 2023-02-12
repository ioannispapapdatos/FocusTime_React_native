import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import Constants from "expo-constants";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("TEST");
  const [hisrory, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My New App</Text>

      {/* If statement */}
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={hisrory} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "lightgrey",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "red",
  },
  renderText: {
    color: "white",
    fontSize: 20,
  },
});
