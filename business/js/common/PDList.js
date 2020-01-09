import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

export default class PDList extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                {this.props.data.map(obj => {
                    const img = obj.img;
                    return (
                        <View style={{
                            flexDirection: 'column', flexWrap: 'wrap', width: Dimensions.get('window').width/3, height: 180,padding: 10
                        }}>
                            <Image style={styles.itemImg} source={{ uri: 'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg' }} />
                            <Text style={styles.itemText}>{obj.title}</Text>
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
        backgroundColor: '#b9e817'
    },
    itemText: {
        color: 'red',
        textAlign: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: 20
    },
    itemImg: {
        height: '75%',
        width: '100%',
        marginTop: 10,
        resizeMode: 'stretch'
    }
})
