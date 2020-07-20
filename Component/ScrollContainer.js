import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native"
import styled from "styled-components";


const ScrollContainer = ({loading, children}) => (
    <ScrollView
        refreshControl={<RefreshControl tintColor={"white"}/>}
        style={{backgroundColor : "black"}}
        contentContainerStyle={{
            flex : loading ? 1 : 0,
            justifyContent : loading ? "center" : "flex-start"
        }}
    >
        {loading ? <ActivityIndicator color="white" size="large"/> : children}
    </ScrollView>
);

ScrollContainer.propTypes = {
    loading : PropTypes.bool.isRequired,
    children : PropTypes.node.isRequired
};

export default ScrollContainer;