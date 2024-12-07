import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

interface AddScreenProps {
  addTask: (taskText: string) => void;
}

export default function AddScreen({ addTask }: AddScreenProps) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a new Task below</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task here"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});
