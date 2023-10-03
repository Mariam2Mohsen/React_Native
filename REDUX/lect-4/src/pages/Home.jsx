import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTodo } from "../Redux/slices/Todo.slice";

const Home = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncTodos = await AsyncStorage.getItem("todos");
    if (asyncTodos) setTodos(JSON.parse(asyncTodos));
  };

  const createTodo = async () => {
    dispatch(addTodo({ title, description }));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      }}
    >
      <Text style={styles.title}>ToDo APP</Text>
      <TextInput
        onChangeText={(value) => setTitle(value)}
        style={styles.input}
        placeholder="Enter Your Todo"
      />
      <TextInput
        onChangeText={(value) => setDescription(value)}
        style={styles.input}
        placeholder="Description"
      />
      <TouchableOpacity style={styles.button} onPress={createTodo}>
        <Text style={{ color: "#fff", fontSize: 20 }}>SAVE</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Todos />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000080",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: 300,
  },
  button: {
    padding: 5,
    backgroundColor: "#000080",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 40,
  },
  divider: {
    width: "95%",
    height: 2,
    backgroundColor: "#000080",
    marginVertical: 20,
  },
});
export default Home;
