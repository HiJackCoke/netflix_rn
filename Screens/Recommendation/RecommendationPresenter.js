import React from 'react';
import styled from "styled-components";
import ScrollContainer from "../../Component/ScrollContainer";
import { Dimensions, ActivityIndicator } from 'react-native'

import {apiImage} from "../../api"
import Poster from "../../Component/poster";
import Link from "../../Component/Detail/Link";
import Votes from "../../Component/votes";
import Vertical from "../../Component/vertical";
import HorizontalSlider from "../../Component/HorizontalSlider";
import List from "../../Component/List";
import Horizontal from "../../Component/Horizontal";


const Container = styled.View``

export default ({openBrowser, refreshFn, result, loading, recommendation }) => (
    <ScrollContainer
        loading={loading}
        refreshFn={refreshFn}
    >
        <Container>
            <List title={"Recommendation"}>
                {recommendation.map(movie => (
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
    </ScrollContainer>
)
