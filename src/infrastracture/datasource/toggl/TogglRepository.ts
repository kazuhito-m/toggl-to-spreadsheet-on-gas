import TogglRepository from 'src/domain/toggl/TogglRepository';
import Achievements from '../../../domain/toggl/Achievements';
import Settings from '../../../domain/config/Settings';

export default class TogglDatasource implements TogglRepository {
  public loadTwoMonth(settings: Settings): Achievements {
    // TODO 実装。
    Logger.log('TogglDatasource.loadTwoMonth() 未実装');
    return new Achievements([]);
  }
}
