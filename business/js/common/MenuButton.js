import React, { Component } from "react";
import { StyleSheet, Alert, Button, Image, Text, View, TouchableWithoutFeedback } from "react-native";

export default class MenuButton extends Component {

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    _onClick() {

        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick} style={styles.touch}>
                <View style={{ alignItems: 'center', flex: 1 }} >
                    <Image style={styles.iconImg} source={this.props.renderIcon} />
                    <Text style={{ flex: 1, color: 'gray', fontWeight: 'bold', fontSize: 12 }}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback >
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        height: '50%',
        width: '50%',
        marginTop: 5,
        resizeMode: 'stretch'
    },
    touch: {
        flex: 1,
        alignItems: 'center',
        padding: 1
    }
});