import { ListEntity } from 'src/list/models/list.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

import { UserEntity } from '../../auth/models/user.entity';



@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ListEntity, list => list.id)
    @JoinColumn()
    list: ListEntity

    @Column()
    body: string;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}


