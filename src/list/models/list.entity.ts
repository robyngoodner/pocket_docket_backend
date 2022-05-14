import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { UserEntity } from '../../auth/models/user.entity';
import { ItemEntity } from '../../item/models/item.entity';


@Entity('list')
export class ListEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.lists)
    user: UserEntity;


    @OneToMany(() => ItemEntity, item => item.list)
    items: ItemEntity[];

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({nullable: true})
    complete: boolean;


    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}


