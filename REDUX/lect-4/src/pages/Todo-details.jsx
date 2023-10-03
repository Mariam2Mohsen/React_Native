import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const params = useRoute().params;
  return (
    <View>
      {params && (
        <>
          <Text>{params.title}</Text>
          <Text>{params.description}</Text>
        </>
      )}
    </View>
  );
};

export default TodoDetails;
