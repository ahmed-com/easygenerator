import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth-strategy.guard';
import { AuthService } from '../service/auth.service';
import { RegisterUserDto, RegisterUserDtoResponse } from '../dto/register.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-strategy.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginDtoResponse } from '../dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // ------------------ Login Endpoint ------------------
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<LoginDtoResponse> {
    const res = await this.authService.login(req.user);
    return new LoginDtoResponse(res.user, res.access_token);
  }

  // ------------------ Register Endpoint ------------------
  @Post('register')
  async register(
    @Body() user: RegisterUserDto,
  ): Promise<RegisterUserDtoResponse> {
    const res = await this.authService.register(user);
    return new RegisterUserDtoResponse(res.user, res.access_token);
  }

  // ------------------ Protected Endpoint ----------------
  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async profile(@Request() req: any) {
    return req.user;
  }

  // useless api endpoint for single token JWT based authentication
  //   @UseGuards(LocalAuthGuard)
  //   @Post('logout')
  //   async logout(@Request() req: any) {
  //     return req.logout();
  //   }
}
