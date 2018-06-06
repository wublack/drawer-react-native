/**
 * Created by admin on 2018/6/6.
 */
import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet, Dimensions, StatusBar, ScrollView,RefreshControl} from 'react-native';


import Banner from '../home/banner';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;
export default class DesignHome extends Component {
    constructor(props) {
        // log.i(TAG, 'constructor');
        super(props)
        /**
         * 使用DataSource作为ListView的数据源
         * 该构造函数接收四个参数
         * getRowData(dataBlob, sectionID, rowID)
         * getSectionHeaderData(dataBlob, sectionID)
         * rowHasChanged(prevRowData, nextRowData)
         * sectionHeaderHasChanged(prevSectionData, nextSectionData)
         */
        let defaultDS = new ListView.DataSource(
            //指定更新row数据的策略，一般都是判断前后两行不相等的时候进行更新
            {rowHasChanged: (prevRowData, nextRowData) => prevRowData !== nextRowData}
        );

        this.state = {
            dataSource: defaultDS,
            data: [],
            nextPageUrl: '',
            isRefreshing: false,
        }
    }

    render() {
        return (
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
                }>
                <View>
                    <StatusBar
                        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                        hidden={false}  //是否隐藏状态栏。
                        backgroundColor={'transparent'} //状态栏的背景色
                        translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                        barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                    />

                    <View style={styles.container}>
                        <Text style={styles.header}>手术辅助设计</Text>
                        <View style={styles.linecontainer}>
                            <Text style={styles.line}/>
                        </View>
                        <View>
                            <Banner/>
                        </View>
                        <View style={styles.content}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {},
    content: {
        backgroundColor: 'red',
        height: deviceH,
    },
    header: {
        width: deviceW,
        fontSize: 28,
        color: '#333333',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 14,
    },
    linecontainer: {
        height: 20,
        backgroundColor: 'white',
    },
    line: {
        width: deviceW - 40,
        height: 1,
        lineHeight: 1,
        marginLeft: 20,
        backgroundColor: '#eeeeee',
    },
    banner: {
        paddingLeft: 20,
        backgroundColor: 'white'
    }

});