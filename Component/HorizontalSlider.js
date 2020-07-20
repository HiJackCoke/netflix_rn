import React from 'react';
import {ScrollView, View} from 'react-native';
import Title from "./title";
import PropTypes from 'prop-types'

const HorizontalSlider = ({title, children}) => (
    <View>
        <Title title={title}/>
        <ScrollView
            style={{marginTop : 20, marginBottom: 40}}
            contentContainerStyle={{paddingLeft : 30}}
            horizontal
            showHorizontalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </View>
);

HorizontalSlider.propTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.node.isRequired
};


export default HorizontalSlider;