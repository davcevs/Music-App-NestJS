import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Genre } from 'src/enums/genre.enum';

export class SongUpdateDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  artist?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  duration?: number;

  @IsString()
  @IsEnum(Genre)
  @IsOptional()
  genre?: Genre;

  @IsDateString()
  @IsOptional()
  releaseDate?: string;
}
