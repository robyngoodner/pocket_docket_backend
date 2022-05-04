import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { from, map, Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService
    ) {

    }

    hashPassword(password: string): Observable<string> {
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const { firstName, lastName, email, password, type_user } = user;

        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    type_user
                })).pipe(
                    map((user: User) => {
                        //returns all data from Observable
                        delete user.password;
                        return user;
                    })
                ); 
            })
        )
    }

    validateUser(email: string, password: string): Observable<User> {
        return from(
            this.userRepository.findOne({
                // { email: email },
                 select: ['id', 'firstName', 'lastName', 'email', 'password', 'role', 'type_user'],
                 where: { email },
            // }
                //According to tutorial, this was supposed to be 'findOne', but it didn't like both arguments...or just the first argument. Good luck.
                
            })
        ).pipe(
            switchMap((user: User) => 
            from(bcrypt.compare(password, user.password)).pipe(
                map((isValidPassword: boolean) => {
                    if (isValidPassword) {
                        delete user.password;
                        return user;
                    }
                }),
            ),
            ),
        );
    }

    login(user: User): Observable<string> {
        const { email, password } = user;
        return this.validateUser(email, password).pipe(
            switchMap((user: User) => {
                if (user) {
                    //create JWT - credentials
                    return from(this.jwtService.signAsync({ user }))
                }
            }),
        );
    }
}
