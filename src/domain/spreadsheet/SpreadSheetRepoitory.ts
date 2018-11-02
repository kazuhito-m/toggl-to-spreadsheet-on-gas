import Achievements from '../toggl/Achievements';

export default interface SpreadSheetRepoitory {
  register(achievements: Achievements): void;
}