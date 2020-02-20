import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, Image, TouchableWithoutFeedback, Dimensions, ScrollView, RefreshControl } from 'react-native';
import BannerScroll from '../common/BannerScroll';

const screenWidth = Dimensions.get('screen').width;
//商品详情
export default class PDDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { refreshing: false }
    }

    _onRefresh = () => {
        //下拉刷新的代码
    }
    render() {
        //轮播图
        const bannerImg = [require('../../img/veer-134813594.jpg'), require('../../img/veer-333372803.jpg'), require('../../img/veer-347518218.jpg')];

        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"

                        />
                    }
                >
                    <View title={'基本属性'} style={{ width: screenWidth }}>
                        {/* 轮播图 */}
                        <BannerScroll data={bannerImg}></BannerScroll>

                        <View title={'商品基本信息'} style={{ backgroundColor: '#fff' }}>
                            <Text style={{ color: 'red', padding: 5 }}>新品抢先价</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <Text style={{ color: 'red', padding: 5, fontSize: 22 }}>￥9.9-35.8</Text>
                                <Text style={{ color: 'gray', padding: 5, textDecorationLine: 'line-through' }}>价格 ￥19.8起</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'red', padding: 5 }}>淘金币抵2%</Text>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("App")}>
                                    <Text style={{ color: '#FF5809', padding: 5, position: 'absolute', right: 3 }}>查看﹥</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View title={'标题'} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', padding: 5, width: screenWidth * 0.75 }}>农家桃胶特级无杂质500g桃胶天然野生一级正品桃胶</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: '#FF5809', position: 'absolute', right: 10 }}>﹤分享</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View title={'推广'} style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-around' }}>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: 'red' }}>196人推荐</Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: 'gray' }}>送给TA</Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: 'gray' }}>帮我选</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View title={'商品属性区'} style={{ padding: 8, marginTop: 10, backgroundColor: '#fff' }}>
                            <View title={'物流'} style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: 'gray' }}>发货</Text>
                                    <Text style={{ color: 'black', padding: 10 }}>广东深圳</Text>
                                </View>
                                <Text style={{ color: 'black' }}>快递：免费</Text>
                                <Text style={{ color: 'black' }}>月销45</Text>
                            </View>

                            <View title={'活动'} style={{ flexDirection: 'row', width: screenWidth }}>
                                <Text style={{ color: 'gray' }}>活动</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <View style={{ flexDirection: 'row', width: screenWidth * 0.91, justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'red' }}>「领！3元优惠券」</Text>
                                        <Text style={{ color: 'gray', position: 'absolute', right: 5 }}>＞</Text>
                                    </View>

                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View title={'商品服务'} style={{ padding: 8, marginTop: 10, backgroundColor: '#fff' }}>
                            <View title={'服务'} style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'gray' }}>服务</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <View style={{ flexDirection: 'row', paddingLeft: 10, width: screenWidth * 0.91 }}>
                                        <Text style={{ color: 'black' }}>付款后48小时内发货 ▪ 订单险</Text>
                                        <Text style={{ textAlign: 'right', color: 'gray', position: 'absolute', right: 5 }}>＞</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View title={'活动'} style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Text style={{ color: 'gray' }}>参数</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <View style={{ flexDirection: 'row', paddingLeft: 10, width: screenWidth * 0.91 }}>
                                        <Text style={{ color: '#000' }}>保质期 产地...</Text>
                                        <Text style={{ color: 'gray', position: 'absolute', right: 5 }}>＞</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                    <View title={'评价'} style={{ marginTop: 10, backgroundColor: '#fff' }}>
                        <View style={{ padding: 10, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#000' }}>宝贝评价(242)</Text>
                            <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                <Text style={{ textAlign: 'right', color: '#FF5809', position: 'absolute', right: 8 }}>查看全部 ＞</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View title={'标签'} style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={styles.commnetTag}><Text style={{ color: '#5B5B5B' }}>实惠</Text></View>
                            <View style={styles.commnetTag}><Text style={{ color: '#5B5B5B' }}>口感不错</Text></View>
                            <View style={styles.commnetTag}><Text style={{ color: '#5B5B5B' }}>质量好</Text></View>
                        </View>
                        <View title={'精选平价'}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 30, height: 30 }} source={require('../../img/tx.jpg')}></Image>
                                <Text style={{ color: 'gray', padding: 5 }}>9***o</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#000', margin: 5 }}>好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好...</Text>

                        <View title={'洋淘买家秀'} style={{ marginTop: 10 }}>
                            <View style={{ paddingLeft: 10, backgroundColor: '#fff', flexDirection: 'row' }}>
                                <Text style={{ color: '#000' }}>洋淘买家秀(242)</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: '#FF5809', position: 'absolute', right: 8 }}>查看全部 ＞</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image style={styles.xiuImg} source={require('../../img/food.png')}></Image>
                                <Image style={styles.xiuImg} source={require('../../img/money.png')}></Image>
                                <Image style={styles.xiuImg} source={require('../../img/packege.png')}></Image>
                                <Image style={styles.xiuImg} source={require('../../img/shopping.png')}></Image>
                            </View>
                        </View>

                        <View title={'问大家'} style={{ margin: 10 }}>
                            <Text style={{ color: '#000' }}>
                                暂无问答
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', backgroundColor: 'red' }}>问大家</Text>
                                <Text style={{ color: 'gray', flex: 3, padding: 10 }}>宝贝好不好，问问已买过的人</Text>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ color: '#FF5809', fontWeight: 'bold', position: 'absolute', right: 8, flex: 1, borderColor: '#FF5809', borderStyle: 'solid', borderWidth: 1, borderRadius: 10, padding: 5 }}>去提问</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>

                    <View title={'店铺信息'} style={{ padding: 10, marginTop: 10, backgroundColor: '#fff' }}>
                        <View title={'店铺基本信息'} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.xiuImg} source={require('../../img/food.png')}></Image>
                                <Text style={{ color: '#000' }}> 老牛家滋补保健店</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 2 }}>
                                <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                    <Text style={{ borderColor: '#FF5809', borderStyle: 'solid', borderWidth: 1, borderRadius: 10, color: '#FF5809', fontWeight: 'bold', padding: 5 }}>
                                        全部宝贝
                                    </Text>
                                </TouchableWithoutFeedback>
                                <View style={{ borderRadius: 10, backgroundColor: '#FF5809', marginLeft: 5 }}>
                                    <TouchableWithoutFeedback onPress={() => Alert.alert('tips', '此功能暂未开放，敬请期待')}>
                                        <Text style={{ color: '#ff', padding: 5 }}>进店逛逛</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View title={'店铺评分'} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width / 3.5 }}>
                                <Text style={{ color: '#8E8E8E' }}>宝贝描述</Text>
                                <Text style={{ color: '#F75000' }}>4.9 高</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width / 3.5 }}>
                                <Text style={{ color: '#8E8E8E' }}>卖家服务</Text>
                                <Text style={{ color: '#F75000' }}>4.9 高</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: Dimensions.get('screen').width / 3.5 }}>
                                <Text style={{ color: '#8E8E8E' }}>物流服务</Text>
                                <Text style={{ color: '#F75000' }}>4.9 高</Text>
                            </View>
                        </View>
                    </View>
                    <View title={'宝贝详情'}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: 'gray' }}>---------- 宝贝详情 -----------</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image style={{ width: Dimensions.get('window').width, resizeMode: 'stretch' }} source={require('../../img/productDetail/xq1.jpg')}></Image>
                            <Image style={{ width: Dimensions.get('window').width, resizeMode: 'stretch' }} source={require('../../img/productDetail/xq2.jpg')}></Image>
                            <Image style={{ width: Dimensions.get('window').width, resizeMode: 'stretch' }} source={require('../../img/productDetail/xq3.jpg')}></Image>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    },
    commnetTag: {
        borderRadius: 10, backgroundColor: '#FFAD86', padding: 5, marginRight: 15
    },
    xiuImg: {
        width: Dimensions.get('screen').width / 6,
        height: 50,
        resizeMode: 'stretch'
    }
});