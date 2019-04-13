import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://robohash.org/James"
    };
    return (
      <View style={styles.container}>
        <Text>This is Your Example App</Text>
        <Image
          source={pic}
          style={{ width: 193, height: 110, backgroundColor: "black" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  }
});
