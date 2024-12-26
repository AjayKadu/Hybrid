import { registerRootComponent } from 'expo';


import Login from './Screen/Login';
import Launcher from './Screen/Launcher';
import Menu from './Screen/Menu';
import Bill from './Screen/Bill';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Launcher);
