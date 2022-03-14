import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ptBr } from './LocaleConfig';

LocaleConfig.locales['pt-BR'] = ptBr;
LocaleConfig.defaultLocale = 'pt-BR';


export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchableEvents?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (date: DayProps) => void
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.shape}
          name={`chevron-${direction}`}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_500,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }

      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    >
    </CustomCalendar >
  );
}

export default Calendar