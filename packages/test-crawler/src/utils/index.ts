import { unix } from 'moment';

export const timestampToString = (timestamp: number) => unix(timestamp)//.format('YYYY.DD.MM HH:mm')
    .calendar()

export const sigDig = (n: number, precision = 1) => {
    if (!n) {
        return n;
    }
    const fix = (precision - 1) - Math.floor(Math.log(n) / Math.log(10));
    return n.toFixed(fix);
}