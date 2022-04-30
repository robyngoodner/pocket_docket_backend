import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

import { UserService } from '../services/user.service'
import { UserStatus } from '../models/user.interface'

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    create(@Body() userStatus: UserStatus): Observable<UserStatus> {
        return this.userService.createUser(userStatus)
    }

    @Get()
    findAll():Observable<UserStatus[]> {
        return this.userService.findAllUsers();
    }

    @Put('edit/:id')
    update(
        @Param('id') id: number,
        @Body() userStatus: UserStatus
    ):Observable<UpdateResult> {
        return this.userService.updateUser(id, userStatus)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>  {
        return this.userService.deleteUser(id)
    }
}
