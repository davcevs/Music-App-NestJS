import { IsEnum } from 'class-validator';
import { Genre } from 'src/enums/genre.enum';

export class ArtistQueryDto {
  @IsEnum(Genre)
  genre: Genre;
}
