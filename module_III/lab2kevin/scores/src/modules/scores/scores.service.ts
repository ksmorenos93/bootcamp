import { Injectable, NotFoundException } from '@nestjs/common';
import {Model, Promise} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Score } from './score.schema';
import { CreateScoresDto } from './dto/create-score.dto';

@Injectable()
export class ScoresService {
    constructor (@InjectModel(Score.name) private scoreModel: Model<Score>){}

    async getAllScores():Promise<Score[]> {

        return this.scoreModel.find().exec(); // este es el mismo find que utilizamos en mongosh.

    }

    async createScore( createScoreDto: CreateScoresDto) {
    const score = new this.scoreModel(createScoreDto);
    return score.save();

    }

    async getScoreById(scoreId:string): Promise<Score> {
        const score= await this.scoreModel
        .findOne({scoreId})
        .select('scoreId');
        if(!score) {
            throw new NotFoundException('Score not found');
            }

        return score;
    }
}

