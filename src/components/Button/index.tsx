import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  children: string;
  color?: string;
  textColor?: string
}

function Button({ children, color, textColor, ...rest }: Props) {
  return (
    <Container color={color} {...rest} >
      <Title color={textColor}>{children}</Title>
    </Container>
  );
}

export default Button