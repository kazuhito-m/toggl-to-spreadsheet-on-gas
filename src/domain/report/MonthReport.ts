import DayTotal from './DayTotal';
export default class MonthReport {
  constructor(private readonly dayTotals: DayTotal[]) {}

  public list(): DayTotal[] {
    return this.dayTotals;
  }
}
