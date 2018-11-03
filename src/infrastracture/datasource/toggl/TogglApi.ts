import Settings from '../../../domain/config/Settings';
import DetailsResponse from './response/DetailsResponse';
import DateRange from '../../../domain/date/DateRange';

export default class TogglApi {
  private static readonly URL_HEAD = 'https://toggl.com/reports/api/v2';

  public getRequestDetails(
    dateRange: DateRange,
    settings: Settings,
  ): DetailsResponse {
    const param = this.makeHttpParam(settings);
    const url = this.makeUrl(dateRange, settings);
    const result = UrlFetchApp.fetch(url, param);
    const jsonObject = JSON.parse(result.getContentText());
    return jsonObject as DetailsResponse;
  }

  private makeHttpParam(settings: Settings): {} {
    const user = settings.togglToken;
    const pass = 'api_token';
    const headers = {
      'Authorization': 'Basic ' + Utilities.base64Encode(user + ':' + pass),
      'Content-Type': 'application/json'
    };
    const param = { headers: headers };
    return param;
  }

  private makeUrl(dateRange: DateRange, settings: Settings): string {
    const head = TogglApi.URL_HEAD;
    const workspaceId = settings.workspaceId;
    const projectId = settings.projectId;
    const start = dateRange.start.format();
    const end = dateRange.end.format();

    let url = `${head}/details`;
    url += `?workspace_id=${workspaceId}&project_ids=${projectId}`;
    url += `&since=${start}&until=${end}&user_agent=api_test`;
    return url;
  }
}
