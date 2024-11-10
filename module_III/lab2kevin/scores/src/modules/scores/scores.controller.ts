import { Controller,Get, Post, Body, Param} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Score} from './score.schema';
import {ScoresService} from './scores.service'
import { CreateScoresDto } from './dto/create-score.dto';


@ApiTags('Scores')
@Controller('scores')
export class ScoresController {

    constructor(private readonly scoresService:ScoresService) {}

    @Get()
    @ApiOperation({summary: 'Get all score for a score'})
    async getAllScores(): Promise<Score[]> {
        return this.scoresService.getAllScores();
    }

    @Post()
    @ApiOperation ({summary:'Create score'})
    @ApiResponse({status:201, description: 'Create Score', type: Score })
    async createScore(@Body() createScoreDto: CreateScoresDto) {
        return this.scoresService.createScore(createScoreDto);
    }   

    @Get(':scoreId')
    @ApiOperation({summary: "get score by scoreId"})
    @ApiResponse({status:200, description: 'get Score by scoreId', type: Score })
    async getScoreById(@Param('scoreId')scoreId:string) {
        return this.scoresService.getScoreById(scoreId);
    }
}

