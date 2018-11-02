import Settings from '../../domain/config/Settings';
import TogglRepository from '../../domain/toggl/TogglRepository';
import SpreadSheetRepoitory from 'src/domain/spreadsheet/SpreadSheetRepoitory';

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
