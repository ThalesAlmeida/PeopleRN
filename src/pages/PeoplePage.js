import React from 'react';
import { View } from 'react-native';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    //Define um estado para o construtor
    this.state = {
      peoples: []
    };
  }

      componentDidMount(){
        // Busca na api os dados dos usuários
        axios.get('https://randomuser.me/api/?nat=br&results=15').then(response=>{
          const { results } = response.data;
          this.setState({
            // Atribui o results a variável peoples
            peoples: results
          })
        })    
    }

  render() {
    // this.props.navivition.navigate()
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
        <PeopleList peoples={this.state.peoples}
        onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }} />
      </View>
    );
  }
}


