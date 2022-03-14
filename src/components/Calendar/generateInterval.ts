import { eachDayOfInterval, format } from 'date-fns'
import { MarkedDateProps, DayProps } from '.';
import theme from '../../styles/theme';
import { formatDays } from '../../utils/getDateFormat';


export function generateInterval(start: DayProps, end: DayProps) {
  console.log(eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) }))

  return eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
    .reduce<MarkedDateProps>((interval, item) => {
      const date = format(formatDays(item), 'yyyy-MM-dd');

      console.log(date, '\n teste');
      return interval = {
        ...interval,
        [date]: {
          color: start.dateString === date || end.dateString === date ?
            theme.colors.primary :
            theme.colors.primary_light,

          textColor: start.dateString === date || end.dateString === date ?
            theme.colors.primary_light : theme.colors.primary
        }
      }
    }, {})
}






