import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import {tvAPI} from '../../api'


export default () => {

    const [TV, setTV] = useState({
        today : [],
        thisWeek : [],
        topRated : [],
        popular : [],
        todayError : null,
        thisWeekError : null,
        topRatedError : null,
        popularError : null
    })

    const getData = async () => {
        const [today, todayError] = await tvAPI.today();
        const [thisWeek, thisWeekError] = await tvAPI.thisWeek();
        const [topRated, topRatedError] = await tvAPI.topRated();
        const [popular, popularError] = await tvAPI.popular()

        setTV({
            today : today,
            thisWeek : thisWeek,
            topRated : topRated,
            popular : popular,
            todayError : todayError,
            thisWeekError : thisWeekError,
            topRatedError : topRated,
            popularError : popularError
        })
    };


    //코드 설명
    useEffect(() => {
        getData();
    }, []);

    return(
        // ?.length 의 의미
        <View>
            <Text>today data is {TV.today ?.length}</Text>
            <Text>this week data is{TV.thisWeek?.length}</Text>
            <Text>top rated data is{TV.topRated?.length}</Text>
            <Text>popular data is{TV.popular.length}</Text>
        </View>
    )
};

