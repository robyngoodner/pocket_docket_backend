import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

import { ListEntity } from '../../list/models/list.entity'

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => ListEntity, list => list.user)
    lists: ListEntity[];


}