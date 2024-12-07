import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";

export default function IndexScreen() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Put nappies in the bag before tomorrow",
      completed: false,
    },

    {
      id: "2",
      text: "Learn how to drive",
      completed: false,
    },
  ]);

  const toggleCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const uncompleted = tasks.filter((task) => !task.completed);
  const renderUncompleted = ({ item }: any) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <Button title="Complete" onPress={() => toggleCompletion(item.id)} />
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </View>
  );

  const completedTasks = tasks.filter((task) => task.completed);
  const renderCompleted = ({ item }: any) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  const addTask = (taskText: string) => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>To do Tasks</Text>
        <FlatList
          data={uncompleted}
          renderItem={renderUncompleted}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={styles.header}>All your Tasks are listed here</Text>
        <FlatList
          data={completedTasks}
          renderItem={renderCompleted}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={styles.header}>Add a new Task below</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task here"
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title="Add Task" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  header: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  taskText: {
    flex: 1,
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
