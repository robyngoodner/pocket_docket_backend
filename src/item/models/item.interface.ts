import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

import { UserEntity } from '../../auth/models/user.entity'

export interface DonorStatus {
    id?: number;
    user?: UserEntity;
    donationOptionOne?: number;
    donationOptionTwo?: number;
    donationOptionThree?: number;
    created_at?: Date;
}