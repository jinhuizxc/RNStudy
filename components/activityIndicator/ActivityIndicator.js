import React, {Component} from 'react'
import {
    ActivityIndicator,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

/**
 * 显示一个圆形的 loading 提示符号。
 */
export default class ActivityIndicatorComponent extends Component {
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size='small' color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
                <ActivityIndicator size="large" color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});
