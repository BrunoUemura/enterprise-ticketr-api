export default class Ticket {
  id: string;
  opened_by: string;
  assigned_to: string;
  title: string;
  description: string;
  from_department: number;
  to_department: number;
  approver: string;
  approved: boolean;
  status: string;
  created_at: Date;
  updated_at: Date;
}
