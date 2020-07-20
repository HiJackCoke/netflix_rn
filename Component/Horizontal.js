import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from './poster';
import {TouchableOpacity} from 'react-native'
import {trimText, formDate} from '../Utils';
import {useNavigation} from '@react-navigation/native'

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;


const Horizontal = ({id, title, releaseDate, poster, overview}) => {

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id,
            title,
            poster,
            overview,
            releaseDate,
            isTV : false
        })
    }

    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster}/>
                <Data>
                    <Title>
                        {trimText(title, 30)}
                    </Title>
                    {releaseDate ? <ReleaseDate>{formDate(releaseDate)}</ReleaseDate> : null}
                    <Overview>{trimText(overview, 130)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    )
}
Horizontal.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    poster : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired
};

export default Horizontal;