import Settings from '../config/Settings';
import Achievements from './Achievements';

export default interface TogglRepository {
  loadTwoMonth(settings: Settings): Achievements;
}
