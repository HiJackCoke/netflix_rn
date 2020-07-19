import React from 'react';
import Input from "../../Component/Input";
import styled from "styled-components";
import HorizontalSlider from "../../Component/HorizontalSlider";
import Horizontal from "../../Component/Horizontal";
import Vertical from "../../Component/vertical";

const Container = styled.ScrollView`
  background-color: black;
`;


export default  ({movies, shows, keyword, onChange, onSubmit}) => (
    <Container
        contentContatinerStyle={{
            paddingTop : 10
        }}
    >
        <Input
            placeholder={"Write a keyWord"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie Results"}>
                {movies.map(movie => (
                    <Vertical
                        key={movie.id}
                        id={movie.id}
                        votes={movie.vote_average}
                        title={movie.title}
                        poster={movie.poster_path || movie.backdrop_path}
                    />
                ))}
            </HorizontalSlider>
        )}
        {shows.length !== 0 && (
            <HorizontalSlider title={"TV Results"}>
                {shows.map(show => (
                    <Vertical
                        key={show.id}
                        id={show.id}
                        votes={show.vote_average}
                        title={show.name}
                        poster={show.poster_path}
                    />
                ))}
            </HorizontalSlider>
        )}
    </Container>
);
