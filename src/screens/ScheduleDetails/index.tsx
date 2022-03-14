import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';


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


function ScheduleDetails(props) {
  const { navigate, goBack } = useNavigation<any>()
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
            <Brand>Audi</Brand>
            <Model>RS 5 Coupé</Model>
          </Description>

          <Rent>
            <Period> Ao dia</Period>
            <Price>R$ 128</Price>
          </Rent>
        </Details>

        <AcessoriesList>
          <Acessory name="380km/h" icon={speed} />
          <Acessory name="3.2s" icon={acceleration} />
          <Acessory name="800 HP" icon={force} />
          <Acessory name="Gasolina" icon={gasoline} />
          <Acessory name="Auto" icon={exchange} />
          <Acessory name="2 pessoas" icon={people} />
        </AcessoriesList>


        <RentalPeriod>
          <CalendarIcon>
            <Icon />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <RightArrow />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>20/06/2021</DateValue>
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