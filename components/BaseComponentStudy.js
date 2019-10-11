import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native'

/**
 * Image组件
 *
 * 用于显示多种不同类型图片的 React 组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等。
 *
 * 下面的例子分别演示了如何显示从本地缓存、网络甚至是以'data:'的 base64 uri 形式提供的图片。
 *
 * 在 Android 上支持 GIF 和 WebP 格式图片
 *
 */
export default class BaseComponent extends Component {

    render() {
        return (
           <View>
               {/*<Button
                   // 空onPress方法
                   onPress={onPressLearnMore}
                   title="Learn More"
                   color="#841584"
                   accessibilityLabel="Learn more about this purple button"
               />*/}
           </View>
        )
    }

};
// 给图片添加style属性：
const style = StyleSheet.create({
    stretch: {
        width: 50,
        height: 200
    }
});