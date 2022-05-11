import { DonorEntity } from "src/list/models/list.entity";
import { Role } from "./role.enum";
import { UserType } from "./userType.enum";



export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    role?: Role;
    createdAt?: Date;
    type_user?: UserType;
    user_type?: DonorEntity;
}