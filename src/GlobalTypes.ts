export interface rolesType {
    id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export interface UserType {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: string;
    email: string;
    roleId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
