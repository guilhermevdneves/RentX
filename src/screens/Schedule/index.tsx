import React, { useState } from 'react';
import { getPathFromState, useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { formatDays } from '../../utils/getDateFormat';
import ArrowSvg from '../../assets/arrow.svg';
import Button from '../../components/Button';
import Calendar, { DayProps, MarkedDateProps } from '../../components/Calendar';
import { Alert } from 'react-native';
import { CarDto } from '../../dtos/CarDto';

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

interface Params {
  params: {
    car: CarDto;
  }
}


function Schedule(props) {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps);
  const { navigate, goBack } = useNavigation<any>();
  const { params: { car } } = useRoute() as Params;
  const theme = useTheme();

  const handleConfirm = () => {
    if (!rentalPeriod.end || !rentalPeriod.start) {
      Alert.alert('Selecione o intervalo para alugar');
    } else {
      navigate('ScheduleDetails', { car, dates: Object.keys(markedDate) })
    }
  }


  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDate(interval)

    const endDayKeys = Object.keys(interval);

    const firstDate = Object.keys(interval)[0]
    const endDate = endDayKeys[endDayKeys.length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(formatDays(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(formatDays(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

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
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>

          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDate}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button onPress={handleConfirm}>Confirmar</Button>
      </Footer>

    </Container >
  );
}

export default Schedule