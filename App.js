import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/components/utils'


export default createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
  
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(
            navigation.state.params.people.name.first
        );

       
           return ({
                title: peopleName,
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 30,
                }
            });
        }
    },
    
}, {
    navigationOptions: {
      title: 'Contatos',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#010a19',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
      },
      headerTitleStyle: {
          color: 'white',
          fontSize: 30,
          alignSelf: 'center',
      }
    }
});