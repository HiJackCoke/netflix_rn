import React from 'react';
import {ScrollView} from 'react-native';
import Title from "./title";

const HorizontalSlider = ({title, children}) => (
    <>
        <Title title={title}/>
        <ScrollView
            style={{marginTop : 20, marginBottom: 40}}
            contentContainerStyle={{paddingLeft : 30}}
            horizontal
            showHorizontalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </>
);

export default HorizontalSlider;