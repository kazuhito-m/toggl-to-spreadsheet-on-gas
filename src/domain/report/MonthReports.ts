import Achievements from '@/domain/toggl/Achievements';
import MonthReport from '@/domain/report/MonthReport';
export default class MonthReports {
  constructor(public readonly achievements: Achievements) {}

  public list(): MonthReport[] {
    // TODO 未実装
    return [];
  }
}
