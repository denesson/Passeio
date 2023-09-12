import React, { Component } from 'react'


import Home from './src/Pages/Home'
import Redirect3 from './src/Pages/Redirect3'
import Tela1 from './src/Pages/Tela1'
import Tela2 from './src/Pages/Tela2'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import { NotificationManager } from './src/Notification'


const notificador = NotificationManager
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.AgendaSchedule();
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "PF",
      "👉 Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    ),
    notificador.showNotification(
      2,
      "Deu fome, Pedi no Lanches da Horas.",
      "Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    ),
    notificador.showNotification(
      3,
      "Redirect",
      "Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    )
  }

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {
              ({navigation}) => {
                notificador.setNavegador(navigation)
                return(
                  <Home 
                    MandarNotificacao={this.onPressSendNotification} 
                    CancelarNotificacao={this.onPressCancelAllLocalNotification} 
                  />
                )
              }
            }
          </Stack.Screen>

          <Stack.Screen name="Redirect" component={Redirect3} />
          <Stack.Screen name="Tela 1" component={Tela1} />
          <Stack.Screen name="Tela 2" component={Tela2} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
