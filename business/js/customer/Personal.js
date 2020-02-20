import React, { Component, useState, useEffect } from 'react'
import { Animated, StyleSheet, Easing, WebView } from 'react-native';

export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        }
    }

    componentDidMount() {
        var timing = Animated.timing;
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            });
        })).start();
    }

    render() {
        return (<Animated.View style={[styles.demo, {
            opacity: this.state.fadeInOpacity,
            transform: [{
                rotateY: this.state.rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                })
            }]
        }]}><Animated.Text style={{
            color: 'red',
            fontSize: this.state.fontSize.interpolate({
                inputRange: [0, 0],
                outputRange: [40, 40]
            })
        }}>我骑着七彩祥云出现了😈💨</Animated.Text>
        </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});