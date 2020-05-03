import React from 'react';
import {ScrollView} from 'react-native';
import Title from "./title";
import PropTypes from 'prop-types'

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

HorizontalSlider.propTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.node.isRequired
};


export default HorizontalSlider;