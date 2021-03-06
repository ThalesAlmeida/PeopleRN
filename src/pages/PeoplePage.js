import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    //Define um estado para o construtor
    this.state = {
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      // Busca na api os dados dos usuários
      axios.get('https://randomuser.me/api/?nat=br&results=150').then(response => {
        const { results } = response.data;
        this.setState({
          // Atribui o results a variável peoples
          peoples: results,
          loading: false,
        })
      }).catch(error => {
        this.setState({
          loading: true,
          error: true
        })
      });
    }, 1500)

  }

  renderPage() {
    if (this.state.loading)
      return (<ActivityIndicator size='large' color='black' />);

    if(this.state.error){
      <Text style={styles.error}>Ops .. Algo deu errado</Text>
    }

    return <PeopleList peoples={this.state.peoples}
    onPressItem={pageParams => {
      this.props.navigation.navigate('PeopleDetail', pageParams);
    }} />
  }

  render() {
    // this.props.navivition.navigate()
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        { this.renderPage()}
        {
          /*this.state.loading
            ? <ActivityIndicator size='large' color='black' />
            : this.state.error
              ? <Text style={styles.error}>Ops .. Algo deu errado</Text>

              : <PeopleList peoples={this.state.peoples}
                onPressItem={pageParams => {
                  this.props.navigation.navigate('PeopleDetail', pageParams);
                }} />
              */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }

});




