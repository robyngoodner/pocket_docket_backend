import { ListEntity } from 'src/list/models/list.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';





@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ListEntity, list => list.id, {nullable: false})
    // @JoinColumn()
    list: ListEntity

    @Column({nullable: false})
    body: string;

    @Column({nullable: true})
    complete: boolean;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , nullable: false})
    createdAt: Date;

}


