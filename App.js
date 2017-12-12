import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
  state = {
    text: ''
  }

  textChangeHandler = value => {
    this.setState({ text: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ {width: 300} }
          value={this.state.text}
          onChangeText={this.textChangeHandler}
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
