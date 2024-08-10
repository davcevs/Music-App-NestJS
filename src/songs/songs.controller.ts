import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongCreateDto } from './dtos/song-create.dto';
import { Songs } from './songs.entity';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new song',
  })
  @ApiCreatedResponse({
    description: 'A new song has been created',
    type: Songs,
  })
  @ApiBody({
    type: SongCreateDto,
  })
  createSong(@Body() body: SongCreateDto): Promise<Songs> {
    return this.songsService.createSong(body);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a song by id',
  })
  @ApiOkResponse({
    description: 'A song has been found',
    type: Songs,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the song',
    type: String,
    required: true,
  })
  getSongById(@Param('id') id: string): Promise<Songs> {
    return this.songsService.getSongById(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a song',
  })
  @ApiOkResponse({
    description: 'A song has been updated',
    type: Songs,
  })
  @ApiBody({
    type: SongCreateDto,
  })
  @ApiParam({
    name: 'id',
    description: 'The id of the song',
    type: String,
    required: true,
  })
  updateSong(
    @Param('id') id: string,
    @Body() body: SongCreateDto,
  ): Promise<Songs> {
    return this.songsService.updateSong(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a song',
  })
  @ApiResponse({
    description: 'A song has been deleted',
    status: 204,
  })
  @HttpCode(204)
  deleteSong(@Param('id') id: string): Promise<void> {
    return this.songsService.deleteSong(id);
  }

  // @Get('artist/:id')
  // getSongsByArtist(@Param('id') id: string): Promise<Songs[]> {
  //   try {
  //     const songs = this.songsService.getSongsByArtistId(id);
  //     if (songs.length === 0) {
  //       throw new Error(`No songs found for artist with ID ${id}`);
  //     }
  //     return songs;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  // @Get('genre/:genre')
  // getSongsByGenre(@Param('genre') genre: string): Promise<Songs[]> {
  //   try {
  //     const songs = this.songsService.getSongsByGenre(genre);
  //     if (songs.length === 0) {
  //       throw new Error(`No songs found for genre ${genre}`);
  //     }
  //     return songs;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  // @Get('artist/:id')
  // getSongsByArtistId(@Param('id') id: string): Promise<Songs[]> {
  //   try {
  //     const artistSongs = this.songsService.getSongsByArtistId(id);
  //     if (artistSongs.length === 0) {
  //       throw new Error(`No songs found for artist with ID ${id}`);
  //     }
  //     return artistSongs;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
}
