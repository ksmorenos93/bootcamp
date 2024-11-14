import {ApiProperty} from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({example: 'pepito@gmail.com', description: "Email del jugador", required: true})
    email: string;

    @ApiProperty({example: 'Pepito Perez', description: "nombre del jugador"})
    name?: string | null

    @ApiProperty({example: 'hash(password)', description: "Password del jugador"})
    password: string;

    @ApiProperty({example: 'Url o nombre del archivo', description: "Imagen del jugador"})
    avatar?: string | null;

    @ApiProperty({example: '["ADMIN","PLAYER"]', description: "Roles que puede tener el jugador"})
    roles?: string [];
}