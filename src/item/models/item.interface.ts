import { UserEntity } from '../../auth/models/user.entity'
import { ListEntity } from "src/list/models/list.entity";

export interface Item {
    id?: number;
    user?: UserEntity;
    list: ListEntity;
    title?: string;
    body?: string;
    created_at?: Date;
}

