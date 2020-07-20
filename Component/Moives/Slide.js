import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native'
import { apiImage } from "../../api";
import Poster from "../poster"
import Votes from "../votes";
import {trimText} from "../../Utils";
import {useNavigation} from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;


const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const VotesContainer = styled.Text`
  margin-bottom: 7px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            title,
            votes,
            backgroundImage,
            overview,
            poster,
            id
        })
    }

    return (
        <Container>
            <BG source={{uri: apiImage(backgroundImage)}} />
            <Content>
                <Poster url={poster}/>
                <Data>
                    <Title>{trimText(title, 40)}</Title>
                    <VotesContainer>
                        <Votes votes={votes} />
                    </VotesContainer>
                    <Overview>{trimText(overview, 110)}</Overview>
                    <TouchableOpacity onPress={goToDetail}>
                        <Button>
                            <ButtonText>View Detail</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    )
}
Slide.propTypes = {
    // id: PropTypes.number.isRequired,
    // title: PropTypes.string.isRequired,
    // backgroundImage: PropTypes.string.isRequired,
    // votes: PropTypes.number.isRequired,
    // overview: PropTypes.string.isRequired,
    // poster: PropTypes.string.isRequired
};

export default Slide;