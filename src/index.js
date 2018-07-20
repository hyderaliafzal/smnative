import React, {Component} from 'react';
import Home from './pages/Home/Home';
import SideBar from './pages/Sidebar/SideBar';

import { createDrawerNavigator } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;