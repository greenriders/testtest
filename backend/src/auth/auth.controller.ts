import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import jwtPayload from './jwtPayload';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<jwtPayload> {
    return this.authService.signJwt(req.user);
  }

  // @Post('signup')
  // async signup(@Request() req): Promise<jwtPayload> {
  //   return this.authService.signJwt(req.user);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async test(@Request() req): Promise<any> {
    let user : User = req.user as User ; 
    return {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role:user.role , 
      code : user.code 
    }
  }

}
