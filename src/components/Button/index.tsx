import React from 'react';
import { Container, Title } from './styles';

interface Props {
  children: string;
  color?: string;
}

function Button({ children, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest} >
      <Title>{children}</Title>
    </Container>
  );
}

export default Button