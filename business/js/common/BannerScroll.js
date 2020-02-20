import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ViewPager from '@react-native-community/viewpager';

export default class BannerScroll extends Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <ViewPager ref='viewPager' style={styles.viewPager} initialPage={0} scrollEnabled={true}>
                {this.props.data.map((img, index) => {
                    return <Image key={index} style={styles.scorolImage} source={img} />
                })}
            </ViewPager>

        );

    }
}

const styles = StyleSheet.create({
    viewPager: {
        height: 150
    },
    scorolImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    }
})