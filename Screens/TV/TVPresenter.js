import React from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from "../../Component/ScrollContainer";
import HorizontalSlider from "../../Component/HorizontalSlider";
import Vertical from "../../Component/vertical";
import styled from "styled-components/native";
import Horizontal from "../../Component/Horizontal";
import List from "../../Component/List";


const Container = styled.View`
  margin-top: 30px;
`;

const TvPresenter = ({refreshFn, loading, popular, topRated, today}) => (
    <ScrollContainer
        loading={loading}
        refreshFn={refreshFn}
    >
        <Container>
            <HorizontalSlider title={"Popular show"}>
                    {popular.map(show => (
                        <Vertical
                            isTV={true}
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
                            isTV={true}
                            key={show.id}
                            votes={show.vote_average}
                            poster={show.poster_path}
                            id={show.id}
                            title={show.name}
                        />
                    ))}
            </HorizontalSlider>
            <List title={"Airing Today"}>
                    {today.map(show => (
                        <Horizontal
                            isTV={true}
                            key={show.id}
                            poster={show.poster_path}
                            id={show.id}
                            title={show.name}
                            overview={show.overview}
                        />
                    ))}
            </List>
        </Container>
    </ScrollContainer>
);

TvPresenter.propTypes = {

};

export default TvPresenter;