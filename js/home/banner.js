/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';

const width = Dimensions.get('window').width;
import Swiper from 'react-native-swiper';

let thiz;
let colorArr = ['red', 'green', 'yellow'];
let array = [];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 0,
            images: [{
                title: '新手必读',
                source: 'https://file.1sju.com/group1/M00/01/49/rBIZa1sOjIOAIXnBAAGmjos0bpY038.jpg'
            },
                {title: '网页下单', source: 'https://file.1sju.com/group1/M00/01/BE/rBIZa1sQ7siAIyPUAAJc9HLzt-s855.jpg'}],
        }
        // this.getMoviesFromApiAsync();
    }


    render() {
        thiz = this;
        return (
            <View style={styles.bannerMain}>
                {/*可以左右滚动区域*/}
                {/* <ScrollView style={styles.bannerScroll}
         horizontal={true}
         pagingEnabled={true}
         showsHorizontalScrollIndicator={false}
         onMomentumScrollEnd={this.onScrollAnimationEnd }
         >
         {this.renderScrollItem()}
         </ScrollView>*/}
                {/*导航点*/}
                {/*<View style={styles.cirl}>
         {this.renderIndicator()}
         </View>*/}
                <Swiper paginationStyle={{bottom: 10}} autoplay={true}>
                    {this.renderScrollItem()}
                </Swiper>
            </View>
        );
    }

    getMoviesFromApiAsync() {
        return fetch('https://app.1sju.com/yishuju-app/system/findCarouselFigureListPage', {
            method: 'POST'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                thiz.setState({
                    array: responseJson.datas.list,
                })

                return responseJson.datas;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onScrollAnimationEnd(e) {
        console.log(e.nativeEvent.contentOffset.x)
        let current = Math.floor(e.nativeEvent.contentOffset.x / width);
        console.log(current);
        thiz.setState({
            activePage: current,
        });
    }

    renderIndicator() {
        let indicatorArr = [], style;
        for (let i = 0; i < this.state.array.length; i++) {
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key={i} style={style}>&bull;</Text>
            );
        }
        return indicatorArr;
    }

    renderScrollItem() {
        var itemArr = [];
        console.log(this.state.images)
        for (var i = 0; i < this.state.images.length; i++) {
            console.log(this.state.images[i].source)
            itemArr.push(
                <Image key={i} source={{uri: this.state.images[i].source}} style={{height: 120, width: width - 40, flex: 1}}
                       resizeMode={Image.resizeMode.stretch}/>
            )
        }
        return itemArr;
    }

    renderSwiper() {
        let itemSwiper = [];
        itemSwiper.push(
            <Swiper paginationStyle={{bottom: 10}} autoplay={true} loop={true}>
                {this.renderScrollItem()}
            </Swiper>
        )
        return itemSwiper;
    }

}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bannerMain: {
        backgroundColor: 'white',
        height: 180,
    },
    bannerScroll: {
        width: width,
        // backgroundColor: 'red',
        alignSelf: 'flex-start'
    },
    bannerItem: {
        width: width,
        height: 180,
        flex: 1,
        // backgroundColor: 'yellow'
    },
    cirl: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

module.exports = Banner;