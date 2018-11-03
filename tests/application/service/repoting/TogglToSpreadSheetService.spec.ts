import TogglToSpreadSheetService from '../../../../src/application/service/repoting/TogglToSpreadSheetService';
import TogglDatasource from '../../../../src/infrastracture/datasource/toggl/TogglRepository';
import SpreadSheetDatasource from '../../../../src/infrastracture/datasource/spreadsheet/SpreadSheetDatasource';

const fs = require('fs');
const jsonText = fs.readFileSync(
  process.cwd() + '/tests/application/service/repoting/resources/test.json',
  'utf8'
);

describe('TogglToSpreadSheetServiceのテスト', () => {
  beforeEach(() => {
    Logger.log = jest.fn(val => console.log(val));
    Utilities.base64Encode = jest.fn(val => btoa(val));
    UrlFetchApp.fetch = jest.fn((val, p) => {
      return { getContentText: () => jsonText };
    });
  });

  it('ローカルでgasの実装が動くかのスモークテスト', () => {
    const settings = {
      togglToken: 'test',
      projectId: 'pjidTest',
      workspaceId: 'wsid',
    };

    const sut = new TogglToSpreadSheetService(
      new TogglDatasource(),
      new SpreadSheetDatasource(),
      settings,
    );
    sut.export();
  });
});
