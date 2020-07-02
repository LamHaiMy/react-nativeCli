/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import VideoControls from './source/Views/VideoControls'
import AutoPlayVideoScrollView from './source/Views/AutoPlayVideoScrollView'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AutoPlayVideoScrollView);
