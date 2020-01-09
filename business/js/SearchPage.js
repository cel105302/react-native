import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class SearchPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textItem}>
                    this search page,now you can search every things you want!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '50%'
    },
    textItem: {
        color: 'red',
        fontSize: 25,
    }
});