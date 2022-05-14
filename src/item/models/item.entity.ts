import { ListEntity } from 'src/list/models/list.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';





@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    listId: number;

    @ManyToOne(() => ListEntity, list => list.items, {nullable: false})
    // @JoinColumn({name: "id_list"})
    list: ListEntity

    @Column({nullable: false})
    body: string;

    @Column({nullable: true})
    complete: boolean;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , nullable: false})
    createdAt: Date;

}


