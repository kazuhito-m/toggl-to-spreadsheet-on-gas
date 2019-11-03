import TogglRepository from '@/domain/toggl/TogglRepository';
import Achievements from '@/domain/toggl/Achievements';
import Settings from '@/domain/config/Settings';
import DateRange from '../../../domain/date/DateRange';
import TogglApi from './TogglApi';
import AchievementsFactory from './AchievementsFactory';

export default class TogglDatasource implements TogglRepository {
  private readonly api = new TogglApi();
  private readonly factory = new AchievementsFactory();

  public loadTwoMonth(settings: Settings): Achievements {
    const nowMonth = DateRange.nowMonth();
    const lastMonth = nowMonth.previousMonth();

    const nowMonthResponse = this.api.getRequestDetails(nowMonth, settings);
    const lastMonthResponse = this.api.getRequestDetails(lastMonth, settings);

    return this.factory.create([nowMonthResponse, lastMonthResponse]);
  }
}
