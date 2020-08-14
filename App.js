import React, { Component } from "react";
import { View, Text } from "react-native";
import CachedImage from "react-native-expo-cached-image";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CachedImage
          style={{ height: 100, width: 100 }}
          source={{
            uri: "https://qvault.io/wp-content/uploads/2019/05/QVault-app.png",
          }}
        />
        <CachedImage
          style={{ height: 100, width: 400, resizeMode: "repeat", margin: 10 }}
          source={require("./imgs/wall.png")}
        />
      </View>
    );
  }
}

export default App;
