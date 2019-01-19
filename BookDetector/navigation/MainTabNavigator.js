import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import BarcodeScanner from "../components/BarcodeScanner";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const CameraStack = createStackNavigator({
  Camera: BarcodeScanner
});

CameraStack.navigationOptions = {
  tabBarLabel: "Camera",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LastBookStack = createStackNavigator({
  Links: LinksScreen
});

LastBookStack.navigationOptions = {
  tabBarLabel: "Last Books",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const HistoricStack = createStackNavigator({
  Settings: SettingsScreen
});

HistoricStack.navigationOptions = {
  tabBarLabel: "Historic",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  LastBookStack,
  CameraStack,
  HistoricStack
});
