import React from 'react';
import { Container, Title } from './styles';

interface Props {
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