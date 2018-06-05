/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Banner from './banner';

class MessageIndex extends Component {

    constructor() {
        super();
        console.log('message index')
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner style={{height:130}}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {

    }
});
module.exports = MessageIndex;