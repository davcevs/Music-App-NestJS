import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Genre } from 'src/enums/genre.enum';

export class SongCreateDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Song name',
  })
  name?: string;

  // @IsOptional()
  // @IsString()
  // @ApiProperty({
  //   type: String,
  //   description: 'Song artist',
  // })
  // artist?: string;

  @IsOptional()
  @Min(1)
  @IsInt()
  @ApiProperty({
    type: Number,
    description: 'Song duration in seconds',
  })
  duration?: number;

  @IsOptional()
  @IsEnum(Genre)
  @ApiProperty({
    enum: Genre,
    description: 'Song genre',
  })
  genre?: Genre;

  @IsDateString()
  @ApiProperty({
    type: String,
    description: 'Song release date',
  })
  releaseDate?: string;
}
