export default class CreateTicket {
  opened_by: string;
  assigned_to?: string;
  title: string;
  description: string;
  from_department: number;
  to_department: number;
  approved?: boolean;
  status?: string;
}
