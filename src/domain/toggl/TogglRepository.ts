import Settings from '@/domain/config/Settings';
import Achievements from '@/domain/toggl/Achievements';

export default interface TogglRepository {
  loadTwoMonth(settings: Settings): Achievements;
}
