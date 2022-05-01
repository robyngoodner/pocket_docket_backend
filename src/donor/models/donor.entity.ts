import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { UserEntity } from '../../auth/models/user.entity';



@Entity('user_status')
export class DonorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.user_type)
    @JoinColumn()
    user: UserEntity;

    @Column({
        type: 'money'})
    donationOptionOne: number;

    @Column({
        type: 'money'})
    donationOptionTwo: number;

    @Column({
        type: 'money'})
    donationOptionThree: number;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}


