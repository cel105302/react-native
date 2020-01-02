/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HelloWorld from './business/HelloWorld';

AppRegistry.registerComponent(appName, () => HelloWorld);
