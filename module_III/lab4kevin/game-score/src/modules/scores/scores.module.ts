import { Module } from '@nestjs/common';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import  {MongooseModule} from '@nestjs/mongoose';
import { Score, ScoreSchema } from './score.schema';


@Module({
  imports: [MongooseModule.forFeature([{name:Score.name, schema:ScoreSchema}]),

  ],
  providers: [ScoresService],
  controllers: [ScoresController]
})
export class ScoresModule {}
