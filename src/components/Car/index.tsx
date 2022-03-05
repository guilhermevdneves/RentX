import React from 'react';
import {
  Container,
  CarInfo,
  Brand,
  Model,
  About,
  Rent,
  Period,
  Price,
  TypeOfFuel,
  CarImage
} from './styles';

export interface CarProps {
  brand: string;
  model: string;
  rent: {
    period: string;
    price: number | string;
  }
  thumbnail: string;
}



function Car({ brand, model, thumbnail, rent: { period, price } }: CarProps) {
  return (
    <Container>
      <CarInfo>
        <Brand>{brand}</Brand>
        <Model>{model}</Model>

        <About>
          <Rent>
            <Period>{period}</Period>
            <Price>{price}</Price>
          </Rent>

          <TypeOfFuel />
        </About>
      </CarInfo>
      <CarImage source={{ uri: thumbnail }} />
    </Container>
  );
}

export default Car;