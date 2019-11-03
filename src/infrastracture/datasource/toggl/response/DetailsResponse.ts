import CotalCurrency from '@/infrastracture/datasource/toggl/response/TotalCurrency';
import DetailsResponseData from '@/infrastracture/datasource/toggl/response/DetailsResponseData';

export default interface DetailsResponse {
  total_grand: number;
  total_billable?: boolean;
  total_currencies: CotalCurrency[];
  total_count: number;
  per_page: number;
  data: DetailsResponseData[];
}
