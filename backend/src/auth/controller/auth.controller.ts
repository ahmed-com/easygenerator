import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth-strategy.guard';
import { AuthService } from '../service/auth.service';
import { RegisterUserDto } from '../dto/register.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-strategy.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // ------------------ Login Endpoint ------------------
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  // ------------------ Register Endpoint ------------------
  @Post('register')
  async register(@Body() user: RegisterUserDto) {
    return this.authService.register(user);
  }

  // ------------------ Protected Endpoint ----------------
  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async profile(@Request() req: any) {
    return req.user;
  }

  // useless api endpoint for JWT based authentication
  //   @UseGuards(LocalAuthGuard)
  //   @Post('logout')
  //   async logout(@Request() req: any) {
  //     return req.logout();
  //   }
}
