import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
        // const { people } = this.props.navigation.state.params;
        const people ={
            "gender": "female",
            "name": {
            "title": "ms",
            "first": "lucila",
            "last": "da rosa"
            },
            "location": {
            "street": "776 rua rio de janeiro ",
            "city": "valparaíso de goiás",
            "state": "mato grosso do sul",
            "postcode": 66173,
            "coordinates": {
            "latitude": "12.7448",
            "longitude": "-69.1546"
            },
            "timezone": {
            "offset": "-12:00",
            "description": "Eniwetok, Kwajalein"
            }
            },
            "email": "lucila.darosa@example.com",
            "login": {
            "uuid": "53e93a92-f71f-495c-819f-69e5092e7664",
            "username": "crazymouse941",
            "password": "hanson",
            "salt": "6ucLi5Dy",
            "md5": "51d9e402fa1a654fd498a8feff897552",
            "sha1": "0fbdc0248fc30426c29672f4e83bd8c43cc45f57",
            "sha256": "19be83c44031d831885e583dc6aea6c864a059fbdeea76c4af86eee32be77815"
            },
            "dob": {
            "date": "1965-03-21T10:58:58Z",
            "age": 53
            },
            "registered": {
            "date": "2017-01-03T16:18:14Z",
            "age": 1
            },
            "phone": "(81) 7657-5259",
            "cell": "(27) 1966-8300",
            "id": {
            "name": "",
            "value": null
            },
            "picture": {
            "large": "https://randomuser.me/api/portraits/women/58.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
            },
            "nat": "BR"
            }
        return (
            <View style={styles.container}>
                <Image source={{ uri: people.picture.large}}
                style={styles.avatar} />
            <View style={styles.detailContainer}>
                <View style={styles.line}>
                <Text style={[styles.cell, styles.label]}>Email:</Text>
                <Text style={styles.cell}>{ people.email } </Text>
                </View>
            </View> 
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding:15,
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1

    },
    line:{
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5',
    },
    cellLabel: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold'
        // borderWidth:1,
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        // borderWidth:1,
    },
    label: {
        fontWeight: 'bold',
    }
})