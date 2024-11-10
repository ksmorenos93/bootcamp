import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({name: 'Pepito Perez'})
  name: string;

  @ApiProperty({name: 'Email'})
  email: string;

}