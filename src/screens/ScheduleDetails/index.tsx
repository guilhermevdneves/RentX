import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Acessory from '../../components/Acessory';
import Button from '../../components/Button';
import exchange from '../../assets/exchange.svg';
import speed from '../../assets/speed.svg';
import acceleration from '../../assets/acceleration.svg';
import force from '../../assets/force.svg';
import gasoline from '../../assets/gasoline.svg';
import people from '../../assets/people.svg';
import { CarDto } from '../../dtos/CarDto';
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
  AcessoriesList,
  Footer,
  Icon,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RightArrow,
  RentalPeriod,
  RentalPrice,
  RentaPriceLabel,
  RentaPriceDetails,
  RentaPriceQuote,
  RentaPriceTotal
} from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params {
  params: {
    car: CarDto;
    date: RentalPeriod;
  }
}


function ScheduleDetails(props) {
  const { navigate, goBack } = useNavigation<any>()
  const { params: { car, date } } = useRoute() as Params;
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrls={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} />
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


        <RentalPeriod>
          <CalendarIcon>
            <Icon />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{date.startFormatted}</DateValue>
          </DateInfo>

          <RightArrow />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{date.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentaPriceLabel>Total</RentaPriceLabel>
          <RentaPriceDetails>
            <RentaPriceQuote>R$ 580 x3 diárias</RentaPriceQuote>
            <RentaPriceTotal>R$ 2.900 </RentaPriceTotal>
          </RentaPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          onPress={() => navigate('ScheduleComplete')}
          textColor={theme.colors.background_secondary}
          color={theme.colors.success}
        >
          Alugar agora
        </Button>
      </Footer>
    </Container>
  );
}

export default ScheduleDetails;