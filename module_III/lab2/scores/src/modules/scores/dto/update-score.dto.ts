import { ApiProperty } from '@nestjs/swagger';

export class UpdateScoresDto {
  @ApiProperty({description: "Update scores", example: "\n" +
      "  \"scoreId\": \"98dc92ff-1882-448f-87a4-e07175c624c4\""})
  score: number;
}