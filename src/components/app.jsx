import React, {useState, useEffect} from 'react';
import {getDevice} from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';

import store from '../js/store';
import {AppConfig} from "@/configs/app.config";
import {StorageService} from "@/services/StorageService";

const MyApp = () => {
  f7ready(async () => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    const data = await StorageService.getData("test", "dasfads");
    console.log("data", data);
  });

  return (
    <App {...AppConfig} dark>

      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/"/>

    </App>
  )
}
export default MyApp;
