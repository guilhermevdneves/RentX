import { addDays } from "date-fns";


export function formatDays(date: Date) {
  return addDays(date, 1);
}