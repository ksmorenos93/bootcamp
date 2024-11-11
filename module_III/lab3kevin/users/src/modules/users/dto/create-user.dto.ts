import {ApiProperty} from '@nestjs/common'

export class CreateUserDto {
    @ApiProperty({name: 'Pepito Perez'})
    name: string;

    @ApiProperty({name:'Email'})
        email: string;
}