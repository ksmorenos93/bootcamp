import { Injectable, NotFoundException } from '@nestjs/common';
import {Model, Promise} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Score } from './score.schema';
import { CreateScoresDto } from './dto/create-score.dto';
import { UpdateScoresDto } from './dto/update-score.dto';


@Injectable()
export class ScoresService {
    constructor (@InjectModel(Score.name) private scoreModel: Model<Score>){}

    async getAllScores():Promise<Score[]> {

        return this.scoreModel.find().exec(); // este es el mismo find que utilizamos en mongosh.

    }

    async getScoreById(scoreId:string): Promise<Score> {
        const score= await this.scoreModel
        .findOne({scoreId})
        .select({'scoreId':1, _id:1, game:1, score:1});
        if(!score) {
            throw new NotFoundException('Score not found');
            }

        return score;
    }


    async createScore( createScoreDto: CreateScoresDto) {
    const score = new this.scoreModel(createScoreDto);
    return score.save();

    }


    async updateScoreById(scoreId:string, updateScoreDto:UpdateScoresDto){
        const updateScore=await this.scoreModel
        .updateOne(
            {scoreId:scoreId}, updateScoreDto);

        if(!updateScore){
            throw new NotFoundException('Score not found');
        }
        return this.getScoreById(scoreId);
    } 

    async deleteScoreById(scoreId:string): Promise<void>{
        const result = await this.scoreModel.deleteOne({scoreId:scoreId}).exec();
        if (!result){
            throw new NotFoundException('Score not found');
        }
    }
}

