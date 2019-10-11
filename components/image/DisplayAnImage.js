import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native'

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
export default class DisplayAnImage extends Component {

    render() {
        return (
            <View>
              {/*  <Image
                    source={require('/react-native/img/favicon.png')}
                />*/}
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
                <Image
                    style={{width: 66, height: 58}}
                    source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                />
                {/*<Image
                    style={styles.stretch}
                    source={require('/react-native/img/favicon.png')}
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