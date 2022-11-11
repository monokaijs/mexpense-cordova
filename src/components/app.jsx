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

import {AppConfig} from "@/configs/app.config";
import {StorageService} from "@/services/StorageService";
import {store, useAppDispatch} from "@/redux/store";
import {loadAppTrips} from "@/redux/actions/app.action";
import {Provider} from "react-redux";

const AppContent = () => {
  const dispatch = useAppDispatch();
  f7ready(async () => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }
    dispatch(loadAppTrips());
  });

  return (
    <App {...AppConfig} dark>
      <View main className="safe-areas" url="/"/>
    </App>
  )
}

const MyApp = () => {


  return (
    <Provider store={store}>
      <AppContent/>
    </Provider>
  )
}
export default MyApp;
