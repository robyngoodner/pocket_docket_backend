import { ListEntity } from "src/list/models/list.entity";



export interface User {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    createdAt?: Date;
    list?: ListEntity;
}