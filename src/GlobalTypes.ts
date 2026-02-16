


enum InvoiceStatus {
PENDING,
PAID,
OVERDUE,
CANCELLED
}

export interface rolesType {
id: string,
name: string,
createdAt: Date,
updatedAt: Date
}

export interface UserType {
id: string;
first_name: string;
middle_name?: string;
last_name: string;
phone: string;
email: string;
roleId: string;
isActive: boolean;
createdAt: Date;
updatedAt: Date;
}

export interface InvoiceType {
id: string
ticket_id: string
client_id: string
amount: Float16Array
currency:string
status: InvoiceStatus
}