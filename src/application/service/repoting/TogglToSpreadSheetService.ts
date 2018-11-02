import TogglRepository from 'src/domain/toggl/TogglRepository';
import SpreadSheetRepoitory from 'src/domain/spreadsheet/SpreadSheetRepoitory';
import Settings from '../../../domain/config/Settings';

export default class TogglToSpreadSheetService {
  constructor(
    private readonly togglRepository: TogglRepository,
    private readonly spreadSheetRepoitory: SpreadSheetRepoitory,
    private readonly settings: Settings,
  ) {}

  public export() {
    const achievements = this.togglRepository.loadTwoMonth(this.settings);
    this.spreadSheetRepoitory.register(achievements);
  }
}
