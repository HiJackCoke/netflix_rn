import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from "./poster";
import {trimText} from '../Utils'
import Votes from "./votes";
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Ionicons, Entypo} from '@expo/vector-icons'
import {Platform} from "react-native-web";

const TouchView = styled.View``;

const RecContainer = styled.View`
  margin-top: 5px;
  margin-right: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({isTV=false, id, poster, title, votes }) => {

    const navigation = useNavigation()

    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTV,
            poster,
            title,
            votes,
            id
        })
    }

    const goToRecommendation = () => {
        navigation.navigate("Recommendation", {
            isTV,
            poster,
            title,
            votes,
            id
        })
    }


    return (
        <TouchView>
            <TouchableOpacity onPress={goToDetail}>
                <Container>
                    <Poster url={poster}/>
                    <Title>{trimText(title, 10)}</Title>
                    {votes > 0 && <Votes votes={votes}/>}
                </Container>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToRecommendation}>
                <RecContainer>
                    <Ionicons
                        name={Platform.OS === "ios" ? "ios-information-circle-outline" : "md-information-circle-outline"}
                        color="white"

                    />
                    <Entypo
                        name="dots-three-vertical"
                        color="white"
                    />
                </RecContainer>
            </TouchableOpacity>
        </TouchView>
    )
}
Vertical.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired
};

export default Vertical;