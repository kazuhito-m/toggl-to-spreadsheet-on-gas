import MonthAchievements from './MonthAchievements';
export default class Achievements {
  constructor(private readonly achevements: MonthAchievements[]) {}

  public get list(): MonthAchievements[] {
    return this.achevements;
  }
}
