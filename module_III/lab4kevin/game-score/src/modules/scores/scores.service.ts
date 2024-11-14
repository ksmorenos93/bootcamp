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

        return this.scoreModel.find({status:true})
        .select({'scoreId': 1, _id:0, game:1, score:1, userId:1}) 
        .exec();
    }
    
    async createScore( createScoreDto: CreateScoresDto) {
    const newScore = new this.scoreModel(createScoreDto);
    const score = await newScore.save()
    return this.getScoreById(score.scoreId);

    }

    async getScoreById(scoreId:string): Promise<Score> {
        const score= await this.scoreModel
        .findOne({scoreId:scoreId, status:true})
        .select({'scoreId':1, _id:0, game:1, score:1, userId:1})
        .exec();

        if(!score) {
            throw new NotFoundException('Score not found');
            }

        return score;
    }




    async updateScoreById(scoreId:string, updateScoreDto:UpdateScoresDto){
        const updateScore=await this.scoreModel
        .updateOne(
            {scoreId:scoreId, status:true}, updateScoreDto);

        if(!updateScore){
            throw new NotFoundException('Score not found');
        }
        return this.getScoreById(scoreId);
    } 

    async deleteScoreById(scoreId:string): Promise<void>{
        const result = await this.scoreModel.findOneAndUpdate(
            {scoreId:scoreId, status:true}, {status:false}).exec();
        if (!result){
            throw new NotFoundException('Score not found');
        }
    }
}

