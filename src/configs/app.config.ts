import routes from '../js/routes';
import {getDevice} from "framework7";

const device = getDevice();

export const AppConfig = {
  name: 'M-Expense', // App name
  theme: 'md', // Automatic theme detection
  id: 'com.monokaijs.mexpense',
  darkMode: true,
  routes: routes,
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
};
