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
} from 'react-native';
const width = Dimensions.get('window').width;
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage:0,
        }
    }




    render() {
        return (
            <View style={styles.bannerMain}>
                {/*可以左右滚动区域*/}
                <ScrollView style={styles.bannerScroll}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={this.onScrollAnimationEnd }
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*导航点*/}
                <View style={styles.cirl}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(e){
        let current = Math.floor(  e.nativeEvent.contentOffset.x / width);
        console.log(this.current);
        this.setState({
            activePage :current,
        });
    }

    renderIndicator() {
        let indicatorArr = [], style;
        for (let i = 0; i < 3; i++) {
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key={i} style={style}>&bull;</Text>
            );
        }
        return indicatorArr;
    }

    renderScrollItem() {
        var itemArr = [];
        var colorArr = ['red', 'green', 'yellow'];
        for (var i = 0; i < colorArr.length; i++) {
            itemArr.push(
                <View key={i} style={styles.bannerItem}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return itemArr;
    }

}

const styles = StyleSheet.create({
    bannerMain: {
        backgroundColor: 'white',
        height: 130,
    },
    bannerScroll: {
        width: width,
        backgroundColor: 'red',
        alignSelf: 'flex-start'
    },
    bannerItem: {
        width: width,
        height: 120,
        backgroundColor: 'yellow'
    },
    cirl: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

module.exports = Banner;