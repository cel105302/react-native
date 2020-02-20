import React, { Component } from 'react'
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HOME from './business/js/home/Home'
import PERSON from './business/js/customer/Personal'
import SEARCHPAGE from "./business/js/product/SearchPage"
import ANIMATEDSCROLL from './business/js/AnimatedScroll'
import PDDetail from './business/js/product/PDDetail'

const tabBars = [
    { title: '首頁', tabIcon: require('./business/img/home.png'), selectedIcon: require('./business/img/home.png'), tag: HOME, ele: HOME },
    { title: '发现', tabIcon: require('./business/img/search.png'), selectedIcon: require('./business/img/search.png'), tag: SEARCHPAGE, ele: SEARCHPAGE },
    { title: '视频', tabIcon: require('./business/img/video.png'), selectedIcon: require('./business/img/video.png'), tag: ANIMATEDSCROLL, ele: ANIMATEDSCROLL },
    { title: '個人中心', tabIcon: require('./business/img/favicon.png'), selectedIcon: require('./business/img/favicon.png'), tag: PERSON, ele: PERSON }
]
class AppRoute extends Component {
    //顶部导航栏参数配置
    static navigationOptions = {
        headerShown: false,
    };
    constructor(props) {
        super(props);
        this.state = { selectedTab: HOME }
    }

    render() {

        let tabViews = tabBars.map((item, i) => {
            return (
                <TabNavigator.Item
                    selected={this.state.selectedTab === item.tag}
                    title={item.title}
                    renderIcon={() => <Image style={styles.tabIcon} source={item.tabIcon} />}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.selectedIcon} />}
                    onPress={() => this.setState({ selectedTab: item.tag })} tile={item.tag} titleStyle={{ color: 'gray', fontSize: 15 }}>

                    <item.ele navigation={this.props.navigation} />
                </TabNavigator.Item>

            )
        });

        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#84C1FF" barStyle={'light-content'}/>
                <TabNavigator tabBarStyle={styles.tab}>
                    {tabViews}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 55,
        alignItems: 'center',
        // position: "absolute",
    },
    tabIcon: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',
        marginTop: 5
    }
});


const NaviApp = createStackNavigator({
    App: { screen: AppRoute },
    SearchPage: { screen: SEARCHPAGE },
    PddDetail: { screen: PDDetail },
});

export default createAppContainer(NaviApp);