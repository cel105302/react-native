import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';


export default class SearchPage extends Component {
    static navigationOptions = {
        title: 'search product',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <TextInput keyboardAppearance='dark' placeholder='搜索商城商品/店铺' style={styles.textInput} />
                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('App')}>
                        <Image source={require('../../img/search_1.png')} style={styles.voiceIcon} />
                    </TouchableNativeFeedback>

                    {/* <Button title={'click me'} onPress={() => this.props.navigation.navigate('App')}>dsd</Button> */}
                </View>
                <View style={{ flex: 12 }}>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBox: {
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    textInput: {
        flex: 1,
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    }
})