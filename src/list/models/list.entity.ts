import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

import { UserEntity } from '../../auth/models/user.entity';
import { ItemEntity } from '../../item/models/item.entity';


@Entity('list')
export class ListEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.list)
    @JoinColumn()
    user: UserEntity;

    @ManyToMany(() => ItemEntity)
    @JoinColumn()
    toDoItems: ItemEntity[];


    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}


