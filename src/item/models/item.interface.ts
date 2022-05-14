import { UserEntity } from '../../auth/models/user.entity'
import { ListEntity } from "src/list/models/list.entity";
import { ItemEntity } from './item.entity';

export interface Item {
    id: number;
    user?: UserEntity;
    list?: ListEntity;
    body?: string;
    complete?: boolean;
    created_at?: Date;
}

