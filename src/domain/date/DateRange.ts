import TextableDate from './TextableDate';
import NowGenerator from './NowGenerator';
export default class DateRange {
  public static generator: NowGenerator = { now: (): Date => new Date() };

  public static nowMonth(): DateRange {
    const now = DateRange.generator.now();
    const year = now.getFullYear();
    const month = now.getMonth();
    const startDay = new Date(year, month, 1, 0, 0, 0);
    const endDay = new Date(year, month + 1, 0, 0, 0, 0);
    return new DateRange(new TextableDate(startDay), new TextableDate(endDay));
  }

  constructor(
    public readonly start: TextableDate,
    public readonly end: TextableDate,
  ) {}
}
