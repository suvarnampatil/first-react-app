import React from 'react';
import { StyleSheet, Text, View,Button  } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:"Rutu",data:[{title:"Click to get data"}]}
    this.changeName = this.changeName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeName =()=>{
    this.setState({name:"Jad"})
  }

  handleClick = async () =>{
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({data: responseJson})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.data.map((item,i)=>{
            <Text key={i}>Title : {item.title}</Text>
          })
        }
        <Button
          onPress={this.handleClick}
          title="Get Data"
          color="#841584"
          accessibilityLabel="Change Name"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
