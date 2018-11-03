// import Parameters from "./infrastracture/datasource/config/Parameters";
import TogglToSpreadSheetService from './application/service/repoting/TogglToSpreadSheetService';
import TogglDatasource from './infrastracture/datasource/toggl/TogglRepository';
import SpreadSheetDatasource from './infrastracture/datasource/spreadsheet/SpreadSheetDatasource';

export default class GasApplication {
  public run() {
    // const parameters = new Parameters();
    // parameters.analyzeArgs();
    // const settings = parameters.loadSettings();

    // TODO パラメータから取得
    const settings = {
      togglToken: 'test',
      projectId: 'pjidTest',
      workspaceId: 'wsid',
    };

    const service = new TogglToSpreadSheetService(
      new TogglDatasource(),
      new SpreadSheetDatasource(),
      settings,
    );
    service.export();
  }
}
