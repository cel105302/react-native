import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class Personal extends Component {
    render() {
        return (
            <View style={{marginTop: '50%'}}>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 35}}>
                    this is personal center
                </Text>
            </View>
        );
    }
}