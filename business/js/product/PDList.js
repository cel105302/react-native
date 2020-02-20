import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native'

const screenWidth = Dimensions.get('window').width;
export default class PDList extends Component {

    render() {
        //数据源
        const { data, navigation } = this.props;
        return (
            <View style={styles.container}>
                {data.map((obj, index) => {
                    return (
                        <View style={{ width: screenWidth / 4.0, height: 150 }}>
                            <TouchableWithoutFeedback onPress={(index) => navigation.navigate('PddDetail',{id: index})}>
                                <View style={{ flexDirection: 'column', flexWrap: 'wrap', paddingLeft: (screenWidth - (screenWidth / 4.0) * 4) / 5 }}>
                                    <Image style={styles.itemImg} source={obj.img} />
                                    <Text style={styles.itemText}>{obj.title}</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    )
                })}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D2E9FF',
        paddingBottom: '25%',
        paddingTop: 15
    },
    itemText: {
        color: '#4F4F4F',
        fontSize: 17,
        textAlign: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: Dimensions.get('screen').height * 0.06
    },
    itemImg: {
        height: '60%',
        width: '90%',
        resizeMode: 'stretch'
    }
})
