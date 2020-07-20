import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from "styled-components";
import {FontAwesome} from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-weight: 600;
  margin-right: 10px;
`;

const Link = ({ onPress, text, icon }) => (
    <TouchableOpacity
        onPress={onPress}
    >
        <Container>
            <Text>
                {text}
            </Text>
            <FontAwesome name={icon} color="white" size={22}/>
        </Container>
    </TouchableOpacity>
)
export default Link;