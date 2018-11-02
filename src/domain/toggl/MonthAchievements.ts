import DayAchievement from './DayAchievement';
export default class MonthAchievements {
  constructor(private readonly achevements: DayAchievement[]) {}

  public get list(): DayAchievement[] {
    return this.achevements;
  }
}
