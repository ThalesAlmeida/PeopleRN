import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/components/utils'


export default createStackNavigator({
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({ navigation }) => {
        // const peopleName = capitalizeFirstLetter(
        //     navigation.state.params.people.name.first
        // );

        const peopleName = "@todo MUDAR ISSO"
           return ({
                title: peopleName,
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 30,
                }
            });
        }
    },
    'Main': {
        screen: PeoplePage
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