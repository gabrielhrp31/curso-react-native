//imports
import React from 'react'
import {AppRegistry, Alert, Text, View, Image, TouchableOpacity} from 'react-native'

//criar componente

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal:40,
    marginTop:30
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
};

const buttonPressed = () => {
  var randomNum = Math.random();
  randomNum = Math.floor(randomNum*5);
  var frases = [
      'O amor é uma flor roxa, que nasce no coração do trouxa',
      'Opnião é igual braço, uns tem outros não',
      'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'As únicas grandes companhias que conseguirão ter êxito são aquelas que consideram os seus produtos obsoletos antes que os outros o façam.'
  ];

  Alert.alert(frases[randomNum]);
};

const App = () => {
  const { principal, button, buttonText } = Estilos;
  // const { principal, botao, textoBotao } = Estilos;
  return (
      <View style={principal}>
        <Image source={require('./imgs/logo.png')}/>
        <TouchableOpacity style={button} onPress={buttonPressed}>
          <Text style={buttonText}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
  );
};

//renderizar componentes
AppRegistry.registerComponent('app2',( )=> App);
