import React from 'react';
import styled from "styled-components";
import Title from "./title";

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({title, children}) => (
    <>
        <Title title={title}/>
        <Container>
            {children}
        </Container>
    </>
);


export default List;