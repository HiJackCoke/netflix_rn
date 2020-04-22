import React, {useEffect, useLayoutEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from "../Screens/Movies";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Favs from "../Screens/Favs";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies"

export default ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="TV" component={TV}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Favs" component={Favs}/>
        </Tabs.Navigator>
    )
};