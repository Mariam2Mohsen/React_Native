import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from '../components/Todos';


const Home = ({}) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncTodos = await AsyncStorage.getItem('todos');
    if (asyncTodos) 
      setTodos(JSON.parse(asyncTodos));
  };

  const addTodo = async () => {
    if (title) {
      const singleTodo = {
        id: Date.now(),
        done: false,
        title,
        description,
      };

      // Check if the todo already exists
      const existingTodo = todos.find((todo) => todo.title === title);

      // If the todo doesn't exist, add it to the todos array
      if (!existingTodo) {
        const allTodos = [...todos, singleTodo];
        await AsyncStorage.setItem('todos', JSON.stringify(allTodos));
        setTodos(allTodos);
      }
    }
  };

  const deleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };


return (
  <View
  style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 50,
            backgroundColor: Platform.OS === "ios" ? "black" : "#6495ED",
    }}
  >
    <Text style={styles.title}>ToDo APP </Text>
    <TextInput
      onChangeText={(value) => setTitle(value)}
      style={styles.input}
      placeholder="Enter Your Title"
    />
    <TextInput
      onChangeText={(value) => setDescription(value)}
      style={styles.input}
      placeholder="Enter Your Description"
    />
    <TouchableOpacity style={styles.button} onPress={addTodo}>
      <Text style={{ color: "#6495ED", fontSize: 20 }}>Submite</Text>
    </TouchableOpacity>
    <View style={styles.divider} />
    {todos.length !== 0 && (
      <>
        
        <Todos todos={todos}/>

        {todos.map((todo) => (
          
          <View  style={styles.todoContainer} >
            
            {/* <Text style={styles.todoTitle}>{todo.title}</Text>
            <Text style={styles.todoDescription}>{todo.description}</Text> */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(todo.id)}
            >
              
              <Text style={{ color: "#6495ED" }} >Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </>
    )}
  </View>
);
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 15,
    color:"white",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: 300,
    textAlign: "center",
    color:"white",
  },
  button: {
    padding: 5,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 40,
  },
  divider: {
    width: "95%",
    height: 2,
    backgroundColor: "white",
    marginVertical: 20,
  },
  todoContainer: {
    marginBottom: 15,
    color:"white",
    alignItems: "center",
  },
  todoTitle: {
    fontWeight: "500",
    fontSize: 24,
    color:"#6495ED",
    backgroundColor: "white",
    borderRadius: 8,
    
  },
  todoDescription: {
    fontSize: 18,
    color:"white",
  
  },
  deleteButton: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "whitesmoke",
    borderRadius: 8,
   
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;