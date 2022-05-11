import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

import { UserEntity } from '../../auth/models/user.entity';



@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}


