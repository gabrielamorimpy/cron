// @flow

import {PureComponent} from 'react'

const weekDaysOptions = [
    'Segundas', 'Terças', 'Quartas',
    'Quintas', 'Sextas', 'Sabados',
    'Domingos'
].map((day: string, i: number) => ({
    label: day,
    value: String(i + 1)
}));

const options = [
    {
        label: 'Todo dia',
        value: '*'
    },
    {
        label: 'Segundas à Sexta',
        value: '1-5'
    },
    {
        label: 'Sábados e Domingos',
        value: '6-7'
    }
].concat(weekDaysOptions);

export default class DayOfWeek extends PureComponent {
    static getOptions() {
        return options
    }

    static className: string = 'DayOfWeek';
}
