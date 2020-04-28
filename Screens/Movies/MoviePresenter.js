import React from 'react';
import styled from "styled-components";
import Swiper from "react-native-swiper";
import {Dimensions, ActivityIndicator} from "react-native";



//rscp


const { width, height } = Dimensions.get("screen");


const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;



const MoviePresenter = ({ loading, nowPlaying }) => (
    <Container>
        {loading ? (
            <ActivityIndicator color="white" size="large" />
        ) : (
            <Header>
                <Swiper
                    controlsEnable={false}
                    loop
                    timeout={3}
                >
                    {nowPlaying.map(movie => (
                        <Section key={movie.id}>
                            <Text>{movie.original_title}</Text>
                        </Section>
                    ))}
                </Swiper>
            </Header>
        )}
    </Container>
)

MoviePresenter.propTypes = {

};

export default MoviePresenter;