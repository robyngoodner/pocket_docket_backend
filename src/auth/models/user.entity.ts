import { DonorEntity } from "src/donor/models/donor.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

import { Role } from './role.enum'
import { UserType } from "./userType.enum";


@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'enum', enum: UserType })
    type_user: UserType;

    @OneToOne(() => DonorEntity, donor => donor.user)
    user_type: DonorEntity;


}