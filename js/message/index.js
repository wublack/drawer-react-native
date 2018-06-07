/**
 * Created by admin on 2018/1/2.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';
import Message from './MyApp';

class MessageIndex extends Component {

    constructor() {
        super();
        console.log('message index')
    }

    render() {
        return (
                <View style={styles.container}>
                    <Message/>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        backgroundColor: 'red',
    },
    linearGradient:{

    }

});
module.exports = MessageIndex;