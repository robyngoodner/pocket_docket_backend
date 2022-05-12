import { ItemEntity } from "src/item/models/item.entity";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

import { UserEntity } from '../../auth/models/user.entity'

export interface List {
    id?: number;
    user: UserEntity;
    item?: ItemEntity;
    title?: string;
    description?: string;
    created_at?: Date;
}