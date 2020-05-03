import React from 'react';
import Input from "../../Component/Input";
import styled from "styled-components";
import HorizontalSlider from "../../Component/HorizontalSlider";
import Horizontal from "../../Component/Horizontal";

const Container = styled.ScrollView`
  background-color: black;
`;


const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit}) => (
    <Container>
        <Input
            placeholder={"Write a keyWord"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        <HorizontalSlider title={"Movie Results"}>
            {movies.map(movie => (
                <Horizontal
                    title={movie.original_title}

                />
            ))}
        </HorizontalSlider>

        <HorizontalSlider title={"Show Results"}>
            {shows.map(show => (
                <Horizontal/>
            ))}
        </HorizontalSlider>
    </Container>
);

export default SearchPresenter;