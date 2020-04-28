import React from 'react';
import styled from "styled-components";
import Swiper from "react-native-swiper";
import {Dimensions} from "react-native";


//rscp


const { width, height } = Dimensions.get("screen");

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;



const MoviePresenter = () => (
    <Header>
        <Swiper>
            <Section>
                <Text>
                    sssss
                </Text>
            </Section>
            <Section>
                <Text>
                    ddddd
                </Text>
            </Section>
            <Section>
                <Text>
                    fffff
                </Text>
            </Section>
        </Swiper>
    </Header>
)

MoviePresenter.propTypes = {

};

export default MoviePresenter;