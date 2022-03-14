import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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

export interface CarProps extends RectButtonProps {
  brand: string;
  model: string;
  rent: {
    period: string;
    price: number | string;
  }
  thumbnail: string;
}



function Car({ brand, model, thumbnail, rent: { period, price }, ...rest }: CarProps) {
  const { navigate } = useNavigation<any>()

  return (
    <Container
      onPress={() => navigate("CarDetails")}

    >
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
    </ Container>
  );
}

export default Car;