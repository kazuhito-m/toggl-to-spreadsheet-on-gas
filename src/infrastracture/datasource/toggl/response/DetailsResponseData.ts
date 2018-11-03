export default interface DetailsResponseData {
  id: number;
  pid: number;
  tid?: number;
  uid: number;
  description: string;
  start: Date;
  end: Date;
  updated: Date;
  dur: number;
  user: string;
  use_stop: boolean;
  client: string;
  project: string;
  project_color: string;
  project_hex_color: string;
  task?: string;
  billable?: boolean;
  is_billable?: boolean;
  cur?: string;
  tags: string[];
}
