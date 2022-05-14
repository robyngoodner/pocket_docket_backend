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
        const { firstName, lastName, email, password } = user;

        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from(this.userRepository.save({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
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
        console.log('password',email)
        return from(
            this.userRepository.findOne({
                select: ['id', 'firstName', 'lastName', 'email', 'password'],
                where: { email }
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
        //console.log("auth.service back end line 75", user)
        const { email, password }: User = user;
        //console.log('line 77 email', user.email)
        return this.validateUser(email, password).pipe(
            switchMap((user: User) => {
                if (user) {
                    //create JWT - credentials
                    console.log('auth service backend user: ',user)
                    return from(this.jwtService.signAsync({ user }))
                }
            }),
        );
    };

    findOne(email: string): Observable<User> {
        console.log('email auth.service line 85: ',email)
        return from(
            this.userRepository.findOne({
                //  select: ['id', 'firstName', 'lastName', 'email', 'password', 'lists'],
                where: { email }, 
                relations: ["lists"]               
            }
            )
            
        )
    };

    update(email: string): Observable<User> {
        return from(
            this.userRepository.save({ 
                email: email, 
                select: ['firstName', 'lastName', 'email', 'password']
            }))
    }

    destroy(email: string){
        console.log('email auth.service line 97: ', email)
        return from(
            this.userRepository.delete ({ email
            })
            )
    }



}