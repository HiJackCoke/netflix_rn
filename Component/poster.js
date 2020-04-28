import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Image = styled.Image`
  width: 130px;
  height: 180px;
  border-radius: 4px;
`



const Poster = ({url}) =>

    <Image source={{uri : url}}/>

Poster.propTypes = {
    url : PropTypes.string.isRequired
};

export default Poster;