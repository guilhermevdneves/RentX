import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  Title,
  StatusBar,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

import ArrowSvg from '../../assets/arrow.svg';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';

function Schedule(props) {
  const { navigate, goBack } = useNavigation<any>()
  const theme = useTheme();

  return (
    <Container>

      <StatusBar />

      <Header>
        <BackButton onPress={() => goBack()} color={theme.colors.shape} />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>18/03/22</DateValue>

          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}>20/03/22</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>


      <Content>

        <Calendar />

      </Content>

      <Footer>
        <Button onPress={() => navigate('ScheduleDetails')}>Confirmar</Button>
      </Footer>

    </Container >
  );
}

export default Schedule