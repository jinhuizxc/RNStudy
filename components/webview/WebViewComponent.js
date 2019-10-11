import React, { Component } from 'react';
import { WebView } from 'react-native';

/**
 * WebView 创建一个原生的 WebView，可以用于访问一个网页。
 *
 * 还可以直接嵌入html代码：

 import React, { Component } from 'react';
 import { WebView } from 'react-native';
 class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  }
}


 */
class MyWeb extends Component {
    render() {
        return (
            <WebView
                source = {{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        );
    }
}

