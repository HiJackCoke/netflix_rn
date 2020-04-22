import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from "../Screens/Movies";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Favs from "../Screens/Favs";


const Tabs = createBottomTabNavigator();

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="TV" component={TV} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
);