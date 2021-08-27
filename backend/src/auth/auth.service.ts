import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtPayload from './jwtPayload';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import Cipher from './cipher';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validate(username: string, password: string): Promise<User> {
        let user = await this.userService.findByEmail(username);
        if (!user) return null;
        
        if (user.password == Cipher.digest(password)) {
            return user;
        }

        return null;
    }

    public async signJwt(user: User): Promise<any> {
        const payload: jwtPayload = { email: user.email, userId: user.id };
        return {
            access_token: "Bearer " + this.jwtService.sign(payload)
        };
    }
}
