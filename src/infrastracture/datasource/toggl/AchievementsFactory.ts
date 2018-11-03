import DetailsResponse from './response/DetailsResponse';
import Achievements from '../../../domain/toggl/Achievements';
import DetailsResponseData from './response/DetailsResponseData';
import MonthAchievement from '../../../domain/toggl/MonthAchievement';
import Achievement from '../../../domain/toggl/Achievement';

export default class AchievementsFactory {
  public create(responses: DetailsResponse[]): Achievements {
    const items = responses.map(r => this.createAchievements(r));
    return new Achievements(items);
  }

  private createAchievements(respose: DetailsResponse): MonthAchievement {
    const items = respose.data.map(d => this.createAchievement(d));
    return new MonthAchievement(items);
  }

  private createAchievement(r: DetailsResponseData): Achievement {
    return new Achievement(
      new Date(r.start),
      new Date(r.end),
      r.dur,
      r.description,
    );
  }
}
