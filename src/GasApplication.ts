// import Parameters from "./infrastracture/datasource/config/Parameters";
import TogglToSpreadSheetService from './application/repoting/TogglToSpreadSheetService';

export default class GasApplication {
  public run() {
    // const parameters = new Parameters();
    // parameters.analyzeArgs();
    // const settings = parameters.loadSettings();

    // TODO パラメータから取得
    const settings = { togglToken: 'test' };

    const syncRemover = new TogglToSpreadSheetService(settings);
    syncRemover.export();
  }
}
