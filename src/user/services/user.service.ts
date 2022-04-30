import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { UserStatusEntity } from '../models/user.entity'
import { UserStatus } from '../models/user.interface'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserStatusEntity)
        private readonly userStatusRepository: Repository<UserStatusEntity>
    ) {}

    createUser(userStatus: UserStatus): Observable<UserStatus> {
        return from(this.userStatusRepository.save(userStatus));
    }

    findAllUsers(): Observable<UserStatus[]> {
        return from(this.userStatusRepository.find());
    }

    updateUser(id: number, userStatus: UserStatus): Observable<UpdateResult> {
        return from(this.userStatusRepository.update(id, userStatus))
    }

    deleteUser(id: number): Observable<DeleteResult> {
        return from(this.userStatusRepository.delete(id));
    }
}
