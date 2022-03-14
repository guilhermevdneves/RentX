import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Acessory from '../../components/Acessory';
import Button from '../../components/Button';
import { CarDto } from '../../dtos/CarDto';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';


import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Rent,
  Period,
  Brand,
  Model,
  Price,
  About,
  AcessoriesList,
  Footer
} from './styles';

interface Params {
  params: {
    car: CarDto
  }
}

function CarDetails(props) {
  const { navigate, goBack } = useNavigation<any>();
  const { params: { car } } = useRoute() as Params;




  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrls={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <AcessoriesList>
          {
            car.accessories.map(acessory => (
              <Acessory name={acessory.name} key={acessory.type} icon={getAccessoryIcon(acessory.type)} />
            ))
          }
        </AcessoriesList>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button onPress={() => navigate('Schedule', { car })}>Escolher período do aluguel</Button>
      </Footer>
    </Container>
  );
}

export default CarDetails;