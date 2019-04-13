import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://robohash.org/James"
    };
    return (
      <View style={styles.container}>
        <Text>This is Your Example App. I DESINGE THIS</Text>
        <Image
          source={pic}
          style={{ width: 193, height: 110, backgroundColor: "black" }}
        />
        <Button onPress={`You Pressed A Buttong`} title="Press Me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
