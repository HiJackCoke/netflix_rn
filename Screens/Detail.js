import React from 'react';
import {View, Text} from 'react-native';
import styled from "styled-components";
import ScrollContainer from "../Component/ScrollContainer";
import {Dimensions} from "react-native"

import {apiImage} from '../api';
import Poster from "../Component/poster";
import Votes from "../Component/votes";

const BG = styled.Image``;

const Header = styled.View``;

const Container= styled.View``;

const Title = styled.Text``;

const Info = styled.View``;


export default ({
    navigation,
    route : {
        params : {id, title, backgroundImage, poster, votes}
    }
}) => {
    navigation.setOptions({title})
    return (
        <ScrollContainer>
            <Header>
                <BG source={{ uri : apiImage(backgroundImage, "-")}}/>
                <Container>
                    <Poster url={poster}/>
                    <Info>
                        <Title>{title}</Title>
                        <Votes votes={votes}/>
                    </Info>
                </Container>
            </Header>
        </ScrollContainer>
    )
}