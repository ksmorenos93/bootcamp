import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @ApiProperty({ example: 'pepito@gmail.com', description: "Email del jugador", required: true })
    email: string;

    @ApiProperty({ example: 'hash(password)', description: "Password del jugador", required: true })
    password: string;
}
