/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './screens/Authentication/SplashScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SplashScreen);
