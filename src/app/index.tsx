import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import React, { Component } from "react";
import Greet from "../components/greet";
import Goodbye from "../components/goodbye";
import style from "./utils/style";

const Index = () => {
  const [counter, setcounter] = useState(1);

  return (
    <View style={{ padding: 20, display: "flex", alignItems: "center" }}>
      <Text style={{ textAlign: "center", color: "blue", fontSize: 20 }}>
        Here we go again
      </Text>
      <Greet />
      <Goodbye
        name="Mulu"
        message="
      Don't forget to pray"
      />

      <Text
        style={{
          textAlign: "center",
          color: "blue",
          fontSize: 20,
          marginVertical: 10,
        }}
      >
        {counter}
      </Text>
      <Button
        title="PRESS Here"
        color={"blue"}
        onPress={() => {
          setcounter(counter + 1);
        }}
      />
      <Pressable
        onPress={() => {
          setcounter(counter - 1);
        }}
        style={style.buttonStyle}
      >
        <Text>Press Here Also</Text>
      </Pressable>
      <Image
        source={require("@/assets/images/adaptive-icon.png")}
        style={{
          width: 200,
          height: 200,
          borderColor: "black",
          padding: 10,
          borderRadius: 5,
          shadowColor: "gray",
          shadowRadius: 4,
          margin: 10,
          alignItems: "center",
        }}
      />

      <FlatList
        data={["Flutter", "React", "React-native"]}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              padding: 20,
              margin: 20,
              shadowColor: "gray",
              shadowRadius: 1,
              borderRadius: 4,
              width: 100,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
      <Image source={require("@/assets/images/icon.png")} />
    </View>
  );
};

export default Index;
