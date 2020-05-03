import React from 'react';
import PropTypes from 'prop-types';
import Input from "../../Component/Input";
import styled from "styled-components";

const Container = styled.ScrollView`
  background-color: black;
`;


const SearchPresenter = () => {
    return (
        <Container>
            <Input placeholder={"Write a keyWord"}/>
        </Container>
    );
};

SearchPresenter.propTypes = {

};

export default SearchPresenter;