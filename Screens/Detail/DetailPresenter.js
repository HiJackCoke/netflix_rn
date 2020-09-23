import React from 'react';
import styled from "styled-components";
import ScrollContainer from "../../Component/ScrollContainer";
import {Dimensions, ActivityIndicator} from "react-native"

import {apiImage} from '../../api';
import Poster from "../../Component/poster";
import Votes from "../../Component/votes";
import Link from "../../Component/Detail/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;


const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;


export default ({openBrowser, refreshFn, result, loading}) => (
    <ScrollContainer
        loading={loading}
        refreshFn={refreshFn}
    >
        <Header>
            <BG source={{ uri : apiImage(result.backgroundImage, "-")}}/>
            <Container>
                <Poster url={result.poster}/>
                <Info>
                    <Title>{result.title}</Title>
                    {result.votes &&  <Votes votes={result.votes}/>}
                </Info>
            </Container>
        </Header>
        <Data>
            {result.overview && (
                <>
                    <DataName>overview</DataName>
                    <DataValue>{result.overview}</DataValue>
                </>
            )}
            {loading && (
                <ActivityIndicator style={{marginTop: 30}} color={"white"}/>
            )}
            {result.spoken_languages && (
                <>
                    <DataName>Release Date</DataName>
                    <DataValue>
                        {result.release_date}
                    </DataValue>
                </>
            )}
            {result.imdb_id && (
                <>
                    <DataName>Links</DataName>
                    <Link
                        text={"IMDB Page"}
                        icon={"imdb"}
                        onPress={() =>
                            openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
                        }
                    />
                </>
            )}
            {result.videos.results?.length > 0 && (
                <>
                    <DataName>Videos</DataName>
                    {result.videos.results.map(video => (
                        <Link
                            text={video.name}
                            icon={video.id}
                            onPress={() => (
                                openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                            )}
                        />

                    ))}
                </>
            )}
        </Data>
    </ScrollContainer>
)