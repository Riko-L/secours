import * as moment from 'moment';

export class DayEvent {

    day: number;
    nameDay: string;
    numberOfEvent: number;

    constructor(day: number, nameDay: string) {
        this.day = day;
        this.nameDay = nameDay;
    }
}
