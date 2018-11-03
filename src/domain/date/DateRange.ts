import TextableDate from './TextableDate';
import NowGenerator from './NowGenerator';
export default class DateRange {
  public static generator: NowGenerator = { now: (): Date => new Date() };

  public static nowMonth(): DateRange {
    const now = DateRange.generator.now();
    return this.toManth(now);
  }

  private static toManth(inDate: Date): DateRange {
    const year = inDate.getFullYear();
    const month = inDate.getMonth();
    const startDay = new Date(year, month, 1, 0, 0, 0);
    const endDay = new Date(year, month + 1, 0, 0, 0, 0);
    return new DateRange(new TextableDate(startDay), new TextableDate(endDay));
  }

  constructor(
    public readonly start: TextableDate,
    public readonly end: TextableDate,
  ) {}

  public previousMonth(): DateRange {
    const s = this.start.value;
    const lastMonth = new Date(s.getFullYear(), s.getMonth() - 1, 1, 0, 0, 0);
    return DateRange.toManth(lastMonth);
  }
}
