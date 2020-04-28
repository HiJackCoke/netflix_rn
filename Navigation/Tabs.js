import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';
import Movie from "../Screens/Movies";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Favs from "../Screens/Favs";


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
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon : ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Movies") {
                        iconName += "film";
                    } else if (route.name === "TV") {
                        iconName += 'tv';
                    } else if (route.name === "Search") {
                        iconName += "search";
                    } else if (route.name === "Favs") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "white" : "grey"}
                            size={26}
                        />
                    )
                }
            })}
            tabBarOptions={{
                showLabel : false,
                style: {
                    backgroundColor : "black",
                    borderTopColor : "black"
                }
            }}
        >
            <Tabs.Screen name="Movies" component={Movie}/>
            <Tabs.Screen name="TV" component={TV}/>
            <Tabs.Screen name="Favs" component={Favs}/>
            <Tabs.Screen name="Search" component={Search}/>

        </Tabs.Navigator>
    )
};