import React from 'react';
import Car from '../../components/Car';
import { Container, Header, LogoSvg, HeaderContent, CarsCount, StatusBar, ScrollCar } from './styles';

function Home() {
  return (
    <Container>
      <StatusBar />
      <Header>
        <HeaderContent>
          <LogoSvg />
          <CarsCount>Total: 12 Carros</CarsCount>
        </HeaderContent>
      </Header>

      <ScrollCar>
        <Car
          brand="Audi"
          model="RS 5 Coupé"
          rent={{
            period: "Ao dia", price: "R$ 128"
          }}
          thumbnail='https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
        />

        <Car
          brand="Honda"
          model="CBR 650R"
          rent={{
            period: "Ao dia", price: "R$ 500"
          }}
          thumbnail='https://s2.glbimg.com/C2Xr4rJo6jlNGxoz3yskCA10Z-U=/0x793:4539x3400/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/8/T/M2czAaRPSdWviYCAt8AQ/155984-2019-cbr650r.jpg'
        />
      </ScrollCar>
    </Container >
  );
}

export default Home