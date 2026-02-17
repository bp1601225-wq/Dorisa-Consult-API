export enum InvoiceStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
  CANCELLED = "CANCELLED",
}

export interface RoleType {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  users?: UserType[];
  tickets?: TicketType[];
}

export interface PriorityType {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  tickets?: TicketType[];
}

export interface StatusType {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  projects?: ProjectType[];
}

export interface UserType {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  phone: string;
  role_id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  role?: RoleType;
  tickets?: TicketType[];
  invoices?: InvoiceType[];
  payments?: PaymentType[];
  clients?: ClientType[];
}

export interface ClientType {
  id: string;
  company_name: string;
  company_address: string;
  client_user_id: string;
  created_at: Date;
  updated_at: Date;
  client?: UserType;
  projects?: ProjectType[];
}

export interface ProjectType {
  id: string;
  client_id: string;
  status_id: string;
  title: string;
  description: string;
  budget: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
  client?: ClientType;
  status?: StatusType;
}

export interface TicketType {
  id: string;
  client_id: string;
  title: string;
  description?: string;
  role_id: string;
  priority_id: string;
  created_at: Date;
  client?: UserType;
  role?: RoleType;
  priority?: PriorityType;
  invoices?: InvoiceType[];
}

export interface InvoiceType {
  id: string;
  ticket_id: string;
  client_id: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  due_date: Date;
  created_at: Date;
  updated_at: Date;
  ticket?: TicketType;
  client?: UserType;
  payments?: PaymentType[];
}

export interface PaymentType {
  id: string;
  invoice_id: string;
  client_id: string;
  amount: number;
  currency: string;
  status: string;
  due_date: Date;
  created_at: Date;
  updated_at: Date;
  invoice?: InvoiceType;
  client?: UserType;
}
