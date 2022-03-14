import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CarDto } from '../../dtos/CarDto';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
  Container,
  CarInfo,
  Brand,
  Model,
  About,
  Rent,
  Period,
  Price,
  CarImage
} from './styles';

export interface CarProps extends RectButtonProps {
  car: CarDto
}

function Car({ car, ...rest }: CarProps) {
  const TypeOfFuel = getAccessoryIcon(car.fuel_type);
  const { navigate } = useNavigation<any>()

  return (
    <Container
      onPress={() => navigate("CarDetails", { car })}
    >
      <CarInfo>
        <Brand>{car.brand}</Brand>
        <Model>{car.name}</Model>
        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>

          <TypeOfFuel />
        </About>
      </CarInfo>
      <CarImage source={{ uri: car.thumbnail }} />
    </ Container>
  );
}

export default Car;