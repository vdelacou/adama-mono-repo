import { format as formatFn } from 'date-fns';

export const getDateWithFormat = (date: Date, format: string) => {
  return formatFn(date, format);
};
