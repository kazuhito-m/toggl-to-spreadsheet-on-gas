import DetailsResponse from './response/DetailsResponse';
import Achievements from '../../../domain/toggl/Achievements';

export default class AchievementsFactory {
  public create(responses: DetailsResponse[]): Achievements {
    return new Achievements([]);
  }
}
