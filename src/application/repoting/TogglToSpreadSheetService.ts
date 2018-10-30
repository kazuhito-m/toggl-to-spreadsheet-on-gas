import { AxiosStatic } from 'axios';
import Settings from '../../domain/config/Settings';

export default class TogglToSpreadSheetService {
  constructor(axiosBase: AxiosStatic, settings: Settings) {}

  public async export() {
    console.log('ここまでは来てることを確認。');
  }
}
