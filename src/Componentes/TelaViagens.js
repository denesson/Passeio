import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Menu from "../Componentes/Menu2.js";
import ListaViagens from "../Componentes/ListaViagens";
import Crud from '../Componentes/Crud/crud.js'
import Viagem from '../Modal/Viagens.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Destino: "",
      Ida: 0,
      Volta: 0,
      Preco: 0.0,
      Status: 'Disponivel',
      lista: []
    }
    this.listar()
  }

  //Controller Lembrando o MVC

  listar = () => {
    const banco = new Crud()

    banco.Listar().then(
      listaCompleta => (
        this.setState({lista: listaCompleta})
      )
    )
  } 

  Inserir = (Destino, Ida, Volta, Preco, Status) => {
    const novoViagem = new Viagem(Destino, Ida, Volta, Preco, Status)
    const banco = new Crud()
    banco.Inserir(novoViagem)
    this.listar()
  }

  Remover = (id) => {
    const banco = new Crud()
    banco.Remover(id)
    this.listar()
  }

  Atualizar = (id, Status) => {
    const banco = new Crud()
    banco.Atualizar(id, Status)
    this.listar()
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View /*style={{backgroundColor: '#00c8ff', flex: 1}}*/>
            <Menu />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={estilos.textB}>Cadastro de Passeios</Text>
              <TextInput onChangeText={(valor) => { this.setState({ Destino: valor }) }} style={estilos.Input} placeholder="Destino" />
              <TextInput onChangeText={(valor) => { this.setState({ Ida: valor }) }} style={estilos.Input} placeholder="Ida" />
              <TextInput onChangeText={(valor) => { this.setState({ Volta: valor }) }} style={estilos.Input} placeholder="Volta" />
              <TextInput onChangeText={(valor) => { this.setState({ Preco: valor }) }} style={estilos.Input} placeholder="Preço" />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={estilos.toucha}
                onPress={() => this.Inserir(this.state.Destino, this.state.Ida, this.state.Volta, this.state.Preco, this.state.Status)}
              >
                <Text style={estilos.textC}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            {/*
            <ListaPasseios
              Destino='SSA Farol da Barra'
              Ida='06/23 - 06:00'
              Volta='06/23 - 19:00'
              Preco='50,00'
            />
            */}

            {/*this.state.lista.map(l => (
              <ListaViagens
                l={l}
                id={l.id}
                Destino={l.Destino}
                Ida={l.Ida}
                Volta={l.Volta}
                Preco={l.Preco}
                Status={l.Status}
                Remover={this.Remover}
                Atualizar={this.Atualizar}
              ></ListaViagens>
            ))*/}

            <FlatList
              data={this.state.lista}
              renderItem={({item})=>
              <ListaViagens
                l={item}
                id={item.id}
                Destino={item.Destino}
                Ida={item.Ida}
                Volta={item.Volta}
                Preco={item.Preco}
                Status={item.Status}
                Remover={this.Remover}
                Atualizar={this.Atualizar}
              ></ListaViagens>
            }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
};



const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#00c8ff',
    borderRadius: 5,
    width: 350,
    height: 200,
    margin: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textB: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  Input: {
    borderWidth: 1,
    width: 340,
    height: 40,
    fontSize: 18,
    borderRadius: 5,
    margin: 5
  },
  toucha: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 5,
    margin: 5,
    width: 150,
  },
  textC: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});