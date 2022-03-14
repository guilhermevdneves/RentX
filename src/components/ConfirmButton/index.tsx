import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

function ConfirmButton({ ...props }: RectButtonProps) {
  return (
    <Container {...props}>
      <Title>Ok</Title>
    </Container>
  );
}

export default ConfirmButton