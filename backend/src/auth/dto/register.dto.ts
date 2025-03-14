import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAscii,
  Matches,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'User name for the new account',
    example: 'john_doe',
  })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

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
