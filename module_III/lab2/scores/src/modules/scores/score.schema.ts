import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Score extends Document {

  @Prop({ type: String, default: uuidv4 })
  scoreId: string;

  @Prop({ type: String, default: uuidv4 })
  userId: string;

  @Prop({ type: String, required: true })
  game: string;

  @Prop({ type: Number, required: true })
  score: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);