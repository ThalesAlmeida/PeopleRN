import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList'

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    //Define um estado para o construtor
    this.state = {
      peoples: []
    };
  }

      componentDidMount(){
        // Busca na api os dados dos usuários
        axios.get('https://randomuser.me/api/?nat=br&results=5').then(response=>{
          const { results } = response.data;
          this.setState({
            // Atribui o results a variável peoples
            peoples: results
          })
        })    
    }

  render() {
    return (
      <View>
        <Header title="Contatos"/>
        <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}


