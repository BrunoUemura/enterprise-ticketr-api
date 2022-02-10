export default class Ticket {
  id: string;
  user_id: string;
  title: string;
  description: string;
  from: string;
  to: string;
  approved: boolean;
  status: string;
  created_at: Date;
  updated_at: Date;
}
