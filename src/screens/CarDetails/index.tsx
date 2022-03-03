import React from 'react';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Acessory from '../../components/Acessory';

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
  About,
  AcessoriesList,
  Footer
} from './styles';
import Button from '../../components/Button';

function CarDetails(props) {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
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

        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button>Escolher período do aluguel</Button>
      </Footer>
    </Container>
  );
}

export default CarDetails;