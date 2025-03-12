import { Text, View } from "react-native";
import React, { Component } from "react";

interface childProps {
  name: string;
  message: string;
}

const Goodbye = ({ name, message }: childProps) => {
  return (
    <View>
      <Text>Goodbye {name}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default Goodbye;
