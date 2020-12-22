import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  background-color: white;
  flex: ${props => props.flex};
  justify-content: space-around
`
export const Title = styled.Text`
  font-size: 32px;
  font-family: Roboto;  
`;

export const TitleBold = styled.Text`
  font-size: 32px;
  font-family: RobotoBold;
`;

export const InputBox = styled.TextInput`
  height: ${({ height }) => height || 50}px;
  width: ${({ width }) => width || 50}px;
  font-family: RobotoBold;
  borderBottomWidth: 1px;
  borderColor: #100249;
  fontSize: 40px;
  align-self: center
`;

export const TextBold = styled.Text`
  font-size: 14px;
  font-family: RobotoBold;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: Roboto;
`;

const TextMedium = styled.Text`
  font-size: 18px;
  align-self: center;
  font-family: Roboto;
`;

Text.Md = TextMedium

