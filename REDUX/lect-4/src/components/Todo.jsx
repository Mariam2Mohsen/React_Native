import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../Redux/slices/Todo.slice";

const Todo = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity   onPress={() => navigation.navigate("Todo-details", todo)}

      activeOpacity={0.8}
      style={{
        width: 300,
        minHeight: 50,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "gray",
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <Text
        onPress={() => navigation.navigate("Todo-details", todo)}
        style={{ color: "#fff" }}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <TouchableWithoutFeedback
          onPress={() => dispatch(deleteTodo({ id: todo.id }))}
        >
          <FontAwesome5 name="trash" size={24} color="red" />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(changeTodoStatus({ id: todo.id }));
            navigation.navigate("Todo-details", todo)          }}
        >
          <FontAwesome name="check-circle" size={24} color="black" />
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;
