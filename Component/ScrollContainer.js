import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native"
import styled from "styled-components";


const ScrollContainer = ({
    loading,
    children,
    contentContainerStyle,
    refreshFn
}) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false)
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    tintColor={"white"}
                    onRefresh={onRefresh}
                    enable={false}
                    refreshing={refreshing}
                />
            }
            style={{backgroundColor : "black"}}
            contentContainerStyle={{
                flex : loading ? 1 : 0,
                justifyContent : loading ? "center" : "flex-start",
                ...contentContainerStyle
            }}
        >
            {loading ? <ActivityIndicator color="white" size="large"/> : children}
        </ScrollView>
    )
}


ScrollContainer.propTypes = {
    loading : PropTypes.bool.isRequired,
    children : PropTypes.node.isRequired,
    contentContainerStyle : PropTypes.object,
    refreshFn : PropTypes.func
};

export default ScrollContainer;