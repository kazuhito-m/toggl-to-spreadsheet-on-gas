import SpreadSheetRepoitory from '../../../domain/spreadsheet/SpreadSheetRepoitory';
import MonthReports from '../../../domain/report/MonthReports';

export default class SpreadSheetDatasource implements SpreadSheetRepoitory {
  public register(monthReports: MonthReports) {
    // TODO 実装。
    Logger.log('SpreadSheetDatasource.register() 未実装');
    Logger.log('届いたReportオブジェクト:' + monthReports);
  }
}
