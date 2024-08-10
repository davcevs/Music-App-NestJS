import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class ArtistCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  @ApiProperty({
    type: String,
    description: 'Name of the artist',
    example: 'Eminem',
    required: true,
  })
  name: string;

  @IsInt()
  @Min(1)
  @ApiProperty({
    type: Number,
    description: 'Age of the artist',
    example: 30,
    required: true,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  @ApiProperty({
    type: String,
    description: 'Country of the artist',
    example: 'USA',
    required: true,
  })
  country: string;
}
