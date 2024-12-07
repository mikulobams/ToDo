import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export type Props = {
  tasks: Task[];
  toggleCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
};

export default function IndexScreen({
  tasks,
  toggleCompletion,
  deleteTask,
}: Props) {
  const uncompleted = tasks.filter((task) => !task.completed);
  const renderUncompleted = ({ item }: { item: Task }) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <Button title="Complete" onPress={() => toggleCompletion(item.id)} />
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Uncompleted Tasks</Text>
      <FlatList
        data={uncompleted}
        renderItem={renderUncompleted}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  header: { fontSize: 24, fontWeight: "bold" },
  taskText: {
    flex: 1,
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
