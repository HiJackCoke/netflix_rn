import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from "./poster";
import {apiImage} from "../api"
import Votes from "./votes";
import {TouchableOpacity} from 'react-native'

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ id, poster, title, votes }) => (
    <TouchableOpacity>
        <Container>
            <Poster url={apiImage(poster)}/>
            <Title>{title}</Title>
            <Votes votes={votes}/>
        </Container>
    </TouchableOpacity>
);
Vertical.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired
};

export default Vertical;