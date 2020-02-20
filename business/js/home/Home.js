import React, { Component } from 'react'
import { StyleSheet, View, Alert, Image, Animated, Dimensions } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import MenuButton from './MenuButton'
import PDList from '../product/PDList';
import Header from '../common/Header'
import SearchPage from '../product/SearchPage';
// import BannerScroll from '../common/BannerScroll';


//轮播图
const bannerImg = [require('../../img/veer-134813594.jpg'), require('../../img/veer-333372803.jpg'), require('../../img/veer-347518218.jpg')];
//快捷菜单
const menuObj = [
    { img: require('../../img/packege.png'), shouText: '我的关注', tag: "wdgz" },
    { img: require('../../img/wl.png'), shouText: '物流查询', tag: "wlcx" },
    { img: require('../../img/money.png'), shouText: '充值', tag: "cz" },
    { img: require('../../img/cinema.png'), shouText: '电影票', tag: "dyp" },
    { img: require('../../img/shopping.png'), shouText: '購物', tag: "gw" },
    { img: require('../../img/food.png'), shouText: '美食', tag: "ms" },
]
//列表
const data = [
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤', "img": require('../../img/wl.png') },
    { "title": "连衣裙", "img": require('../../img/food.png') }, { "title": '长裤', "img": require('../../img/packege.png') },
    { "title": "连衣裙", "img": require('../../img/cinema.png') }, { "title": '长裤长裤长裤长裤长裤长裤长裤长裤长裤长裤长裤长裤长裤', "img": require('../../img/wl.png') },
];
export default class Home extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props);
        this._onMenuClick = this._onMenuClick.bind(this);
        this.state = {
            currPage: 0,
            totalPage: 3,
            headerTop: new Animated.Value(0),
            bannerFlex: 2
        }
    }


    componentDidMount() {
        this._intervalScroll();
        // P.S. 270,217,280区间的映射是告诉interpolate，所有大于270的值都映射成-50
        // 这样就不会导致Header在上滑的过程中一直向上滑动了
        this.top = this.state.headerTop.interpolate({
            inputRange: [0, 250, 271, 280],
            outputRange: [0, -200, -200, -200]
        })

        this.animatedEvent = Animated.event([
            {
                nativeEvent: {
                    contentOffset: { y: this.state.headerTop }
                }
            }
        ])
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
            //如果下一页大于总页数，则跳转到第一页，下表从0开始
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
            <View style={{ flex: 1 }} >
                {/* 头部 */}
                < Header {...this.props}/>
                <View >
                    <Animated.View style={{ top: this.top }}>
                        {/* banner轮播图 */}
                        <ViewPager ref='viewPager' style={styles.viewPager} initialPage={0} scrollEnabled={true}>
                            {bannerImg.map((img, index) => {
                                return <Image key={index} style={styles.scorolImage} source={img} />
                            })}
                        </ViewPager>
                        {/* <BannerScroll data={bannerImg}></BannerScroll> */}
                        {/* 导航菜单区 */}
                        <View style={styles.menuView}>
                            {menuObj.map((menu, index) => {
                                return < MenuButton key={index} renderIcon={menu.img} showText={menu.shouText} tag={menu.tag} onClick={this._onMenuClick} />
                            })}
                        </View>
                    </Animated.View>
                </View>
                <View>
                    <Animated.ScrollView onScroll={this.animatedEvent} style={{ top: this.top }}>
                        <PDList data={data} {...this.props} />
                    </Animated.ScrollView>
                </View >
            </View >

        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        height: 150
    },
    text: {
        color: 'red'
    },
    scorolImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    menuView: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        backgroundColor: '#E0FFFF',
        padding: 10
    },
    content: {
        flex: 3
    }
});

// const RootStack = createStackNavigator(
//     {
//         Home: HomeContent,
//         SearchPage: SearchPage
//     },
//     {
//         /* 这里定义的头部样式对栈中的每个屏幕生效除非那个屏幕类覆盖了改定义 */
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#84C1FF',
//             },
//             headerTintColor: '#ddd',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class Home extends Component {
//     render() {
//         return (
//             <AppContainer />
//         )
//     }
// }