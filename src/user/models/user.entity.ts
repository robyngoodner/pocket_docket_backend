import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum UserType {
    Donor = 'Donor',
    Recipient = 'Recipient',
    Store = 'Store',
    Helper = 'Helper',
}

@Entity('user_status')
export class UserStatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ enum: ['Donor', 'Recipient', 'Store', 'Helper'] })
    type_user: UserType;

}


