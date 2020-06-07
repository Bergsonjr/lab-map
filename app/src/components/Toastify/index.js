import React, { Component } from "react";
import { Button, View } from "react-native";
import Toast from "@rimiti/react-native-toastify";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render(title, msg) {
    return (
      <View style={{ paddingTop: 300 }}>
        <Button
          onPress={() => this.toastify.show(`${msg}`, 1000)}
          title={title}
        />
        <Toast ref={(c) => (this.toastify = c)} />
      </View>
    );
  }
}
