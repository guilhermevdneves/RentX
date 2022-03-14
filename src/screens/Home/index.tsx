import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import api from '../../services/api';
import Car from '../../components/Car';
import Load from '../../components/Load';
import { CarDto } from '../../dtos/CarDto';
import { Container, Header, LogoSvg, HeaderContent, CarsCount, StatusBar, CarList } from './styles';

function Home() {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await api.get('/cars');
      console.log(response.data);
      setCars(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao tentar buscar as informações!');
    }

    setLoading(false);
  };

  useEffect(() => { fetchCars(); }, [])

  return (
    <Container>
      <StatusBar />
      <Header>
        <HeaderContent>
          <LogoSvg />
          <CarsCount>Total: {cars.length} Carros</CarsCount>
        </HeaderContent>
      </Header>
      {
        loading ?
          <Load />
          :
          <CarList<any>
            ItemSeparatorComponent={(() => (<View style={{ padding: 8 }} />))}
            data={cars}
            keyExtractor={(item: CarDto) => item.id}
            renderItem={({ item }: { item: CarDto }) => (
              <Car car={item} />
            )}

          />

      }



    </Container >
  );
}

export default Home