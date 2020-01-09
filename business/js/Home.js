import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import MenuButton from './common/MenuButton'
import { ScrollView } from 'react-native-gesture-handler';
import PDList from './common/PDList';

export default class Home extends Component {

    constructor(props) {
        let interval;
        super(props);
        this._onMenuClick = this._onMenuClick.bind(this);
        this.state = {
            currPage: 0,
            totalPage: 3
        }
    }

    componentDidMount() {
        this._intervalScroll();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
    }

    _intervalScroll() {
        //取到轮播图组件
        let scrolView = this.refs.viewPager;

        //定时设置当前页，实现图片轮播效果
        this.interval = setInterval(() => {
            var activePage = 0;
            if (this.state.currPage + 1 >= this.state.totalPage) {
                activePage = 0;
            } else {
                activePage = this.state.currPage + 1;
            }

            this.setState({
                currPage: activePage
            });

            scrolView.setPage(this.state.currPage);

        }, 2000);
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: '30%' }}>
                    {/* banner轮播图 */}
                    <ViewPager ref='viewPager' style={styles.viewPager} initialPage={0} transitionStyle="scroll" scrollEnabled={true}>
                        <View style={styles.page} key="1">
                            <Image style={styles.scorolImage} source={require('../img/veer-134813594.jpg')} />
                        </View>
                        <View style={styles.page} key="2">
                            <Image style={styles.scorolImage} source={require('../img/veer-333372803.jpg')} />
                        </View>
                        <View style={styles.page} key="3">
                            <Image style={styles.scorolImage} source={require('../img/veer-347518218.jpg')} />
                        </View>
                    </ViewPager>
                </View>

                {/* 导航菜单区 */}
                <View style={{ flex: 2, backgroundColor: '#E0FFFF' }}>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../img/packege.png')} showText={'我的关注'} tag={'wdgz'} onClick={this._onMenuClick} />
                        <MenuButton renderIcon={require('../img/wl.png')} showText={'物流查询'} tag={'wlcx'} onClick={this._onMenuClick} />
                        <MenuButton renderIcon={require('../img/money.png')} showText={'充值'} tag={'cz'} onClick={this._onMenuClick} />
                        <MenuButton renderIcon={require('../img/cinema.png')} showText={'电影票'} tag={'dyp'} onClick={this._onMenuClick} />
                    </View>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../img/shopping.png')} showText={'購物'} tag={'gouwu'} onClick={this._onMenuClick} />
                        <MenuButton renderIcon={require('../img/food.png')} showText={'美食'} tag={'ms'} onClick={this._onMenuClick} />
                        <MenuButton />
                        <MenuButton />
                    </View>

                </View>

                <View style={{ flex: 4 }}>
                    <ScrollView style={styles.content}>
                        <PDList data={[{ "title": "连衣裙", "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤长', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' },
                        { "title": '长裤', "img": '../img/food.png' }, { "title": '长裤', "img": '../img/food.png' }]} />
                    </ScrollView>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red'
    },
    scorolImage: {
        height: '100%',
        resizeMode: 'stretch'
    },
    menuView: {
        //height: '20%',
        flexDirection: 'row'
    },
    content: {
        flex: 3
    }
});