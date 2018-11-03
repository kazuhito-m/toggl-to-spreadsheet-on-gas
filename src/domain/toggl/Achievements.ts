import MonthAchievement from './MonthAchievement';
export default class Achievements {
  constructor(private readonly achevements: MonthAchievement[]) {}

  public get list(): MonthAchievement[] {
    return this.achevements;
  }
}
