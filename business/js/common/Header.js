
import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../img/qr_scan.png')} style={styles.logo} />
                <View onTouchEnd={() => { this.props.navigation.navigate('SearchPage') }} style={styles.searchBox}>
                    {/* <Image source={require('../../img/tx.jpg')} style={styles.searchIcon} /> */}
                    {/* <TextInput keyboardAppearance='dark' placeholder='搜索商城商品/店铺' style={styles.inputText} /> */}
                    <Image style={styles.inputText} source={require('../../img/headerInput.jpg')} />
                    {/* <Image source={require('../../img/search_1.png')} style={styles.voiceIcon} /> */}
                </View>
                <Image source={require('../../img/favicon.png')} style={styles.scanIcon} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#84C1FF',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 40,
        width: 50,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height: 42,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        height: '100%',
        resizeMode: 'stretch'
    }
});