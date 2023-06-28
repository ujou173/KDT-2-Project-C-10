import React from "react";
import { Button, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";



export default function ButtonBox() {


  return (
    <View>
      <TouchableOpacity
        style={styles.input}>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor : "red",
    padding: 10,
  },
});
