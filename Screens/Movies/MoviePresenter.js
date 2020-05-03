import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import {ScrollView, Dimensions } from "react-native";
import Slide from "../../Component/Moives/Slide";
import Title from "../../Component/title";
import Vertical from "../../Component/vertical";
import Horizontal from "../../Component/Horizontal";
import ScrollContainer from "../../Component/ScrollContainer";
import HorizontalSlider from "../../Component/HorizontalSlider";
import List from "../../Component/List";


const {width : WIDTH, height : HEIGHT} = Dimensions.get("screen")

const Container = styled.View``;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT/3}px;
  margin-bottom: 30px;
`;



const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => (
    <ScrollContainer loading={loading}>
        <>
            <SliderContainer>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map(movie => (
                        <Slide
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                            poster={movie.poster_path}
                        />
                    ))}
                </Swiper>
            </SliderContainer>
            <Container>
                <HorizontalSlider title={"Popular Movies"}>
                    {popular.map(movie => (
                        <Vertical
                            key={movie.id}
                            id={movie.id}
                            votes={movie.vote_average}
                            poster={movie.poster_path}
                            title={movie.original_title}
                        />
                    ))}
                </HorizontalSlider>
                <List title={"Coming soon"}>
                    {upcoming.map(movie => (
                        <Horizontal
                            key={movie.id}
                            poster={movie.poster_path}
                            overview={movie.overview}
                            releaseDate={movie.release_date}
                            id={movie.id}
                            title={movie.original_title}
                        />
                    ))}
                </List>
            </Container>
        </>
    </ScrollContainer>
);

MoviePresenter.propTypes = {

};

export default MoviePresenter;