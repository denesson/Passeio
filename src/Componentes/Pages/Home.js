import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class Home extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.MandarNotificacao}
        >
          <Text style={styles.text}>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.CancelarNotificacao}>
          <Text style={styles.text}>Cancelar notificações</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8C3D2B',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D9B79A',
    padding: 10,
    width: 200,
    marginTop: 10,
    borderRadius: 10
  },
  text:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }
});