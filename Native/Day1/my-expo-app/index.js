import { registerRootComponent } from 'expo';


//import App from './App';
//import Example from './Example';
import Launcher from './CRUD/Launcher';
import TestMap from './Screen/TestMap';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(TestMap);
