import MonthAchievement from '@/domain/toggl/MonthAchievement';
export default class Achievements {
  constructor(private readonly achevements: MonthAchievement[]) {}

  public get list(): MonthAchievement[] {
    return this.achevements;
  }
}
