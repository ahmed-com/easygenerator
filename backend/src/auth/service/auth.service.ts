import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserObject } from 'src/users/schema/user.schema';
import { UserService } from 'src/users/service/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterUserDto } from '../dto/register.dto';

export type SafeUserObject = Omit<UserObject, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<SafeUserObject | null> {
    const user = await this.userService.findOneByEmail(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: SafeUserObject): Promise<{ access_token: string }> {
    const payload = { sub: user._id.toString() };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    user: RegisterUserDto,
  ): Promise<{ user: SafeUserObject; access_token: string }> {
    const hashedPassword = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
    );
    const newUser = await this.userService.create({
      ...user,
      password: hashedPassword,
    });
    const { password, ...result } = newUser;
    const payload = { sub: newUser._id.toString() };
    return {
      user: result,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
