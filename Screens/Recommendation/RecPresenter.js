import React from 'react';
import styled from "styled-components";
import ScrollContainer from "../../Component/ScrollContainer";
import { Dimensions, ActivityIndicator } from 'react-native'

import {apiImage} from "../../api"
import Poster from "../../Component/poster";
import Link from "../../Component/Detail/Link";
import Votes from "../../Component/votes";


const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;


const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({openBrowser, results, loading }) => (
    <ScrollContainer>
        <Header>
            <BG source={{uri : apiImage(results.backgroundImage, "-")}}/>
            <Container>
                <Poster url={results.poster}>
                    <Info>
                        <Title>{results.title}</Title>
                        {results.votes && <Votes votes={results.votes} />}
                    </Info>
                </Poster>
            </Container>
        </Header>
        <Data>

        </Data>
    </ScrollContainer>
)
