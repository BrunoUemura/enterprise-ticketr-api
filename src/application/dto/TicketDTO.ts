export default class TicketDTO {
  opened_by: string;
  assigned_to?: string;
  title: string;
  description: string;
  from_department: string;
  to_department: string;
  approved?: boolean;
  status: string;
}
