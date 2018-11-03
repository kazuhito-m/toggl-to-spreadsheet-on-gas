import MonthReports from '../report/MonthReports';

export default interface SpreadSheetRepoitory {
  register(monthReports: MonthReports): void;
}
