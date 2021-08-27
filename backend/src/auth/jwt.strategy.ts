import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import config from 'src/env';
import jwtPayload from './jwtPayload';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService : UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.jwtKey,
        });
    }

    async validate(payload: jwtPayload): Promise<User> {
        return this.userService.findById(payload.userId);         
    }
}