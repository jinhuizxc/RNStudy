/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DisplayAnImage from "./components/image/DisplayAnImage";
import ActivityIndicatorComponent from "./components/activityIndicator/ActivityIndicator";
import BaseComponent from "./components/BaseComponentStudy";
import DatePickerIOSComponent from "./components/date/ss";
import HelloWorldApp from "./components/HelloWorld";

// 初始化注册组件
// AppRegistry.registerComponent(appName, () => App);
// Image
// AppRegistry.registerComponent(appName, () => DisplayAnImage);
// ActivityIndicator
// AppRegistry.registerComponent(appName, () => ActivityIndicatorComponent);
// 基础组件学习
// AppRegistry.registerComponent(appName, () => BaseComponent);

// AppRegistry.registerComponent(appName, () => DatePickerIOSComponent);
AppRegistry.registerComponent(appName, () => HelloWorldApp);
