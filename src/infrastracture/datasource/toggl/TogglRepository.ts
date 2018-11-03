import TogglRepository from 'src/domain/toggl/TogglRepository';
import Achievements from '../../../domain/toggl/Achievements';
import Settings from '../../../domain/config/Settings';
import DateRange from '../../../domain/date/DateRange';
import TogglApi from './TogglApi';

export default class TogglDatasource implements TogglRepository {
  private readonly api = new TogglApi();

  public loadTwoMonth(settings: Settings): Achievements {
    const nowMonth = DateRange.nowMonth();
    const lastMonth = nowMonth.previousMonth();

    return new Achievements([]);
  }
}
