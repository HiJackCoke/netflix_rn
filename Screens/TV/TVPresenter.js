import React from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from "../../Component/ScrollContainer";
import HorizontalSlider from "../../Component/HorizontalSlider";
import Vertical from "../../Component/vertical";
import styled from "styled-components/native";
import Horizontal from "../../Component/Horizontal";
import Title from "../../Component/title";

const Container = styled.View`
  margin-top: 20px;
`;



const TvPresenter = ({loading, popular, topRated, today}) => (
    <ScrollContainer loading={loading}>
        <HorizontalSlider title={"Popular show"}>
            {popular.map(show => (
                <Vertical
                    key={show.id}
                    votes={show.vote_average}
                    poster={show.poster_path}
                    id={show.id}
                    title={show.name}
                />
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated"}>
            {topRated.map(show => (
                <Vertical
                    key={show.id}
                    votes={show.vote_average}
                    poster={show.poster_path}
                    id={show.id}
                    title={show.name}
                />
            ))}
        </HorizontalSlider>
        <Title title={"Airing Today"}/>
        <Container>
            {today.map(show => (
                // <Vertical
                //     key={show.id}
                //     votes={show.vote_average}
                //     poster={show.poster_path}
                //     id={show.id}
                //     title={show.name}
                // />
                <Horizontal
                    key={show.id}
                    poster={show.poster_path}
                    id={show.id}
                    title={show.name}
                    overview={show.overview}
                />
            ))}
        </Container>
    </ScrollContainer>
);

TvPresenter.propTypes = {

};

export default TvPresenter;