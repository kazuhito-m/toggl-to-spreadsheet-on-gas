import TogglToSpreadSheetService from '../../../../src/application/service/repoting/TogglToSpreadSheetService';
import TogglDatasource from '../../../../src/infrastracture/datasource/toggl/TogglRepository';
import SpreadSheetDatasource from '../../../../src/infrastracture/datasource/spreadsheet/SpreadSheetDatasource';

describe('TogglToSpreadSheetServiceのテスト', () => {
  beforeEach(() => {
    Logger.log = jest.fn(val => console.log(val));
  });

  it('ローカルでgasの実装が動くかのスモークテスト', () => {
    const sut = new TogglToSpreadSheetService(
      new TogglDatasource(),
      new SpreadSheetDatasource(),
      { togglToken: 'test' },
    );
    sut.export();
  });
});
