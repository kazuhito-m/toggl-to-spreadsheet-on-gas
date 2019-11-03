import MonthReports from '@/domain/report/MonthReports';

export default interface SpreadSheetRepoitory {
  register(monthReports: MonthReports): void;
}
