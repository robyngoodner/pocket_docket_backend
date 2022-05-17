import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ) {}


    @Post('register')
    register(@Body() user: User): Observable<User> {
        return this.authService.registerAccount(user)
    }

    @Post('login')
    login(@Body() user: User): Observable<{ token: string }> {
        //console.log("auth.controller line 18",user["email"])
        //console.log(typeof((user["email"])))
        return this.authService
        .login(user)
        .pipe(map((jwt: string) => ({ token: jwt })));
    }

    @Get('users/:email')
    findOne(@Param('email') email: string){
        //console.log('auth.controller line 27')
        return this.authService.findOne(email);
    }

    @Put('/users/:email/edit')
    edit(@Param('email') email: string){
        //console.log('auth controller line 33')
        return this.authService.update(email);
    }

    @Delete('users/:email/delete')
    destroy(@Param('email') email: string){
        //console.log('auth.controller line 38')
        return this.authService.destroy(email);
    }
}
