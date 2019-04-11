import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "rutu", data: {} };
  }
  render() {
    const data = this.state.data.matches || [];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text
            style={{
              paddingTop: 50,
              paddingLeft: 50,
              color: "#000"
            }}
          >
            Click Me
          </Text>
        </TouchableOpacity>
        {data.slice(1, 7).map((row, i) => {
          return this.renderRow(row, i);
        })}
      </View>
    );
  }

  renderRow(row, i) {
    return (
      <View
        key={i}
        style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}
      >
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <Text>{row.date.split("T")[0]}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <Text>
            {row["team-1"]} Vs {row["team-2"]}
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "stretch" }}>
          <Text>{row.type}</Text>
        </View>
      </View>
    );
  }

  handlePress = async () => {
    fetch(
      "http://cricapi.com/api/matches?apikey=ixqbtlCTvwdIH9gmM3ecAi3eI8F2",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});