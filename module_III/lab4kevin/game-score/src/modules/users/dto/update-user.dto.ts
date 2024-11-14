import {ApiProperty} from '@nestjs/swagger'

export class UpdateUserDto {

    @ApiProperty({ example: 'Pepito Perez', description: 'Nombre del jugador'})
    name?: string | null

    @ApiProperty({ example: "Url o nombre del archivo" , description: "Imagen del jugador"})
    avatar?:  string | null
}