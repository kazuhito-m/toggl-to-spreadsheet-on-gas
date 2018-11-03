import TextableDate from './TextableDate';
export default class DateRange {
  public static nowMonth(): DateRange {
    const now = DateRange.now();
    const year = now.getFullYear();
    const month = now.getMonth();
    const startDay = new Date(year, month, 1, 0, 0, 0);
    const endDay = new Date(year, month + 1, 1, 0, 0, 0);
    return new DateRange(new TextableDate(startDay), new TextableDate(endDay));
  }

  private static now(): Date {
    return new Date();
  }

  constructor(
    private readonly from: TextableDate,
    private readonly to: TextableDate,
  ) {}
}
