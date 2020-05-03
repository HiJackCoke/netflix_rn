import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from './poster';
import {apiImage} from "../api";
import Votes from './votes';

const Container = styled.View``;

const Data = styled.View``;

const Title = styled.Text``;


const Horizontal = ({id, title, votes, poster, overview}) => (
    <Container>
        <Poster url={apiImage(poster)}/>
        <Data>
            <Title>
                {title}
            </Title>
            <Votes votes={votes}/>
        </Data>
    </Container>
);

Horizontal.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired
};

export default Horizontal;