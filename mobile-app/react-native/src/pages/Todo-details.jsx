import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const params = useRoute().params;
  
  return (
    <View style={{
      borderWidth:5,
      width:600,
      height:600,
      margin:'auto',
      borderColor:'#0000FF',
      backgroundColor: "white",
      }} >
    
      {params && (
        <>
          <Text style={{ textAlign: 'center', fontSize: 'xx-large', color: '#0000FF', margin: '30px', }}>{params.title}</Text>
          <Text style={{ textAlign: 'center', fontSize: 'xx-large', color: '#0000FF' }}>{params.description}</Text>
        </>
      )}
    </View>
  );
};

export default TodoDetails;
