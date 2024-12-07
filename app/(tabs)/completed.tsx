import { Text, View, StyleSheet, FlatList } from "react-native";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface CompletedScreenProps {
  tasks: Task[];
}

export default function CompletedScreen({ tasks }: CompletedScreenProps) {
  const completedTasks = tasks.filter((task) => task.completed);
  const renderCompleted = ({ item }: { item: Task }) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>All your Tasks are listed here</Text>
      <FlatList
        data={completedTasks}
        renderItem={renderCompleted}
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
