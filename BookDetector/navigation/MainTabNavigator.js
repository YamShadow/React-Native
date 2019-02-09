import React from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import BarcodeScanner from "../components/BarcodeScanner";
import BookScreen from "../screens/BookScreen";
import ListScreen from "../screens/ListScreen";

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
                    ? `ios-barcode${focused ? "" : "-outline"}`
                    : "md-barcode"
            }
        />
    )
};

const LastBookStack = createStackNavigator({
    Book: BookScreen
});

LastBookStack.navigationOptions = {
    tabBarLabel: "Book",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-bookmarks" : "md-bookmarks"}
        />
    )
};

const HistoricStack = createStackNavigator({
    List: ListScreen
});

HistoricStack.navigationOptions = {
    tabBarLabel: "Historic",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"}
        />
    )
};

export default createBottomTabNavigator({
    LastBookStack,
    CameraStack,
    HistoricStack
});
