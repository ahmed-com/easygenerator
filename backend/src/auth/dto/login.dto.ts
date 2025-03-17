import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAscii,
  Matches,
} from 'class-validator';
import { SafeUserObject } from '../service/auth.service';

export class LoginDto {
  @ApiProperty({
    description: 'Email for the new account',
    example: 'john@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the new account',
    example: 'StrongPassword123!',
  })
  @IsNotEmpty()
  @MinLength(8)
  @IsAscii()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/)
  password: string;
}

export class LoginDtoResponse {
  name: string;
  email: string;
  id: string;
  accessToken: string;

  constructor(user: SafeUserObject, accessToken: string) {
    this.name = user.name;
    this.email = user.email;
    this.id = user._id.toString();
    this.accessToken = accessToken;
  }
}
