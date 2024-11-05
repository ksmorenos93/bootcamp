import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ScoresService } from './scores.service';
import {ApiTags,ApiOperation, ApiResponse} from '@nestjs/swagger';
import { Score } from './score.schema';
import { CreateScoresDto } from './dto/create-score.dto';
import { UpdateScoresDto } from './dto/update-score.dto';

@ApiTags('Scores')
@Controller('scores')
export class ScoresController {

  constructor(private readonly scoresService: ScoresService) {}

  @Get()
  @ApiOperation({summary: 'Get all scores for a score'})
  async getAllScores(): Promise<Score[]> {
    return this.scoresService.getAllScores();
  }

  @Post()
  @ApiOperation({summary: 'Create score'})
  @ApiResponse({status: 201, description: 'Create score', type: Score} )
  async createScore(@Body() createScoreDto: CreateScoresDto) {
    return this.scoresService.createScore(createScoreDto);
  }

  @Get(':scoreId')
  @ApiOperation({summary: 'get Score by Id'})
  @ApiResponse({status: 200, description: 'Score by Id', type: Score} )
  async getScoreById(@Param('scoreId') scoreId: string) {
    return this.scoresService.getScoreById(scoreId);
  }

  @Put(':scoreId')
  @ApiOperation({summary: 'Update score'})
  @ApiResponse({status: 200, description: 'Update Score by ScoreId', type: Score} )
  async updateScore(@Param('scoreId') scoreId: string,
                    @Body() updateScoreDto: UpdateScoresDto) {
    return this.scoresService.updateScore(scoreId, updateScoreDto);
  }

  @Delete(':scoreId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({summary: 'Delete score'})
  @ApiResponse({status: 204, description: 'Delete Score by ScoreId'} )
  async deleteScore(@Param('scoreId') scoreId: string) {
    return this.scoresService.deleteScore(scoreId);
  }
}
