export interface Client {
  id: string;
  email: string;
  phone: string;
  password: string;
  country: string;
  companyName: string;
  contactPerson: string;
  companyWebsite?: string;
  createdAt: Date;
}