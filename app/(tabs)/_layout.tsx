import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Index from ".";

export default function TabLayout() {
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

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f2e6e6",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Uncompleted Tasks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
        initialParams={{
          tasks: tasks,
          toggleCompletion: toggleCompletion,
          deleteTask: deleteTask,
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: "Completed Tasks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "checkmark-circle" : "checkmark-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
        initialParams={{ tasks: tasks }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add New Task",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add" : "add-outline"}
              color={color}
              size={24}
            />
          ),
        }}
        initialParams={{ tasks: tasks, addTask: addTask }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About ToDo",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
