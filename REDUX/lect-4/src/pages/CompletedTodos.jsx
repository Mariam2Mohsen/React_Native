import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "../components/Todo";

const NotCompletedTodo = () => {
  const [notdoneTodos, notsetDoneTodos] = useState([]);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter((res) => res.done == false);
      notsetDoneTodos(filteredTodos);
    }
  }, [todos]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {notdoneTodos.length ? (
        <>
          <Text>NotCompletedTodo</Text>
          {notdoneTodos.map((todo) => (
            <>
              <Todo key={todo.id} todo={todo} />
            </>
          ))}
        </>
      ) : (
        <Text>No Todos Found!</Text>
      )}
    </View>
  );
};

export default NotCompletedTodo;