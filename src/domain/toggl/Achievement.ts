export default class Achievement {
  constructor(
    private readonly start: Date,
    public readonly end: Date,
    private readonly duration: number,
    public readonly description: string,
  ) {}

  public monthText(): string {
    const s = this.start;
    return `${s.getFullYear()}年${s.getMonth()}月`;
  }

  public durationHour(): number {
    return this.duration / 36001000;
  }
}
