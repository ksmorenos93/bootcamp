import {ApiProperty} from '@nestjs/swagger';
import {Score} from '../score.schema'

export class CreateScoresDto {
    @ApiProperty ({description: 'UserId (UUID)'})
    userId: string;

    @ApiProperty ({description: 'Name for the game'})
    game: string;

    @ApiProperty ({description: 'Score for the game'})
    score: Score;
}