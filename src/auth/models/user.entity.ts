import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

import { Role } from './role.enum'

import { ListEntity } from '../../list/models/list.entity'

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ select: false })
    password: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToOne(() => ListEntity, list => list.user)
    list: ListEntity;


}