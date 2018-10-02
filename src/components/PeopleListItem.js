import React from 'react';
<<<<<<< HEAD
import { Text, View, StyleSheet } from 'react-native';
=======
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
>>>>>>> dev

import { capitalizeFirstLetter } from './utils';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name;
    return (
        <TouchableOpacity onPress={() => {console.log('Clicou em mim', first);
            navigateToPeopleDetail({ people });
        }}>
        <View style={styles.line}>
            <Text style={styles.lineText}>
            { `${
                capitalizeFirstLetter(title)
            } ${
                capitalizeFirstLetter(first)

            } ${capitalizeFirstLetter(last)
            
            }` }
            </Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#6A5ACD',
        alignItems: 'center',
        flexDirection: 'row',
    },

    lineText:{
        fontSize: 20,
        paddingLeft: 15,
    }
})

export default PeopleListItem;