import Achievement from './Achievement';

export default class MonthAchievement {
  constructor(private readonly achevements: Achievement[]) {}

  public get list(): Achievement[] {
    return this.achevements;
  }
}
