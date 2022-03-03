import React from 'react';
import { View } from 'react-native';
import Car from '../../components/Car';
import { CarProps } from '../../components/Car';
import { Container, Header, LogoSvg, HeaderContent, CarsCount, StatusBar, CarList } from './styles';

const data = [
  {
    brand: "Audi",
    model: "RS 5 Coupé",
    rent: {
      period: "Ao dia", price: "R$ 128"
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
  },
  {
    brand: "Honda",
    model: "CBR 650R",
    rent: {
      period: "Ao dia", price: "R$ 500"
    },
    thumbnail: 'https://s2.glbimg.com/C2Xr4rJo6jlNGxoz3yskCA10Z-U=/0x793:4539x3400/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/8/T/M2czAaRPSdWviYCAt8AQ/155984-2019-cbr650r.jpg'
  }
];

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

      <CarList<any>
        ItemSeparatorComponent={(() => (
          <View
            style={{ padding: 8 }}
          />
        ))
        }
        data={data}
        keyExtractor={(item: CarProps) => item.model}
        renderItem={({ item }: { item: CarProps }) => (
          <Car
            brand={item.brand}
            model={item.model}
            rent={item.rent}
            thumbnail={item.thumbnail}
          />
        )}

      />
    </Container >
  );
}

export default Home