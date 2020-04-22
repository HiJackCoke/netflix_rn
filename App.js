import React, {useState} from 'react';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {View, Text, Image} from "react-native";
import {Asset} from 'expo-asset';
import {Ionicons} from '@expo/vector-icons';


const cacheImage = images =>
    images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image)
        }
        else {
            return Asset.fromModule(image).downloadAsync
        }
    })

const cacheFonts = fonts => (
    fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)])
)

export default function App() {

    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const image = cacheImage([
            "https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            require("./assets/splash.png")
        ]);
        console.log(images)
        const fonts = cacheFonts([Ionicons.font])
        return Promise.all([...images, ...fonts])
    };

    const onFinish = () => setIsReady(true);

    return isReady ? (
        <View>
            <Text>Ready!</Text>
        </View>
    ) : (
        <AppLoading
            startSync={loadAssets}
            onFinish={onFinish}
            onError={console.error}
        />
    )

    return (
        <View>
            <Text> i love three</Text>
        </View>
    )

}


