import Achievements from '../toggl/Achievements';
import MonthReport from './MonthReport';
export default class MonthReports {
  constructor(public readonly achievements: Achievements) {}

  public list(): MonthReport[] {
    // TODO 未実装
    return [];
  }
}
