import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const sign_up = () => {
  return (
    <View>
      <Text>sign_up</Text>
      <Link href="/(auth)/sign_in">Create an account</Link>
    </View>
  );
};

export default sign_up;
