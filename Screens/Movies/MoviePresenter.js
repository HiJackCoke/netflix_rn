import React from 'react';
import styled from "styled-components";
import Swiper from "react-native-swiper";
import {ActivityIndicator} from "react-native";
import Slide from '../../Component/Moives/Slide';





const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;





const MoviePresenter = ({ loading, nowPlaying }) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (
            <>
                <Swiper
                    controlsEnable={false}
                    loop
                    timeout={3}
                >
                    {nowPlaying.map(movie => (
                        <Slide
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            backgroundImage={movie.backdrop_path}
                            // votes={movie.vote_average}
                            // overView={movie.overview}

                        />
                    ))}
                </Swiper>
            </>
        )}
    </Container>
)

MoviePresenter.propTypes = {

};

export default MoviePresenter;