export default class Achievement {
  constructor(
    private readonly start: Date,
    private readonly end: Date,
    private readonly duration: number,
    private readonly description: string,
  ) {}
}
