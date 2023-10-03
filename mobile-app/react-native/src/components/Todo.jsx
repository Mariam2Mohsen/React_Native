import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Todo = ({ todo }) => {
  const navigation = useNavigation();
  return (

    <TouchableOpacity
     activeOpacity={0.8}
     onPress={() => navigation.navigate('Todo-details', todo)}
      style={{
        width: 300,
        minHeight: 50,
        padding: '50',
        backgroundColor: 'gray',
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 'xx-large', color: 'black',textAlign:"center"
 }}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

export default Todo;
