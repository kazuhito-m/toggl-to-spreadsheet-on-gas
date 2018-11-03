export default class TextableDate {
  constructor(public readonly value: Date) {}

  public format(): string {
    const date = this.value;
    const units = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    return units
      .map(i => i.toString())
      .map((v, i) => this.padStart(i === 0 ? 4 : 2, '0', v))
      .join('-');
  }

  private padStart(repeat: number, char: string, target: string) {
    const work = this.repeat(char, repeat) + target;
    return work.slice(-repeat);
  }

  private repeat(char: string, repeat: number) {
    let result = '';
    for (let i = 0; i < repeat; i++) result += char;
    return result;
  }
}
