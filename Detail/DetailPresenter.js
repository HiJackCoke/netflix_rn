import React from 'react';
import styled from "styled-components";
import ScrollContainer from "../Component/ScrollContainer";
import {Dimensions} from "react-native"

import {apiImage} from '../api';
import Poster from "../Component/poster";
import Votes from "../Component/votes";

const BG = styled.Image`
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3 }px;
  align-items: center;
  justify-content: flex-end;
`;

const Container= styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info =  styled.View`
   width: 50%;
  margin-left: 40px;
`;

const Data = styled.Text`
  margin-top: 80px;
  padding: 0px 30px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

const DataName = styled.Text``;
export default ({backgroundImage, title, votes, overview, poster}) => (
    <ScrollContainer>
        <Header>
            <BG source={{ uri : apiImage(backgroundImage, "-")}}/>
            <Container>
                <Poster url={poster}/>
                <Info>
                    <Title>{title}</Title>
                    {votes &&  <Votes votes={votes}/>}
                </Info>
            </Container>
        </Header>
        <Data>
            {overview && (
                <>
                    <DataName>overview</DataName>
                    <DataValue>{overview}</DataValue>
                </>
            )}
        </Data>
    </ScrollContainer>
)