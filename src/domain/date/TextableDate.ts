export default class TextableDate {
  constructor(public readonly value: Date) {}

  public format(): string {
    const date = this.value;
    const units = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    return units
      .map(i => i.toString())
      .map((v, i) => v.padStart(i === 0 ? 4 : 2, '0'))
      .join('-');
  }
}
