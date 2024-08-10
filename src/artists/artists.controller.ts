import { SongsService } from './../songs/songs.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistQueryDto } from './dtos/artist-query.dto';
import { Artists } from './artists.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ArtistCreateDto } from './dtos/artist-create.dto';
// import { Artist } from './artists.service';


@ApiBearerAuth()
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
)
@ApiTags('Artists')
@Controller('artists')
export class ArtistsController {
  constructor(
    private artistsService: ArtistsService,
    private songsService: SongsService,
  ) {}

  // create artist
  @Post('/')
  @ApiOperation({
    summary: 'Create a new artist',
  })
  @ApiCreatedResponse({
    description: 'A new artist has been created',
    type: Artists,
  })
  @ApiBody({
    type: ArtistCreateDto,
  })
  @UsePipes(new TrimStringsPipe())
  createArtist(
    @Body() body: Artists): Promise<Artists> {
    return this.artistsService.createArtist(body);
  }
  // get all artists
  @Get('/')
  @ApiOperation({
    summary: 'Get all artists',
  })
  @ApiOkResponse({
    description: 'All artists have been found',
    type: [Artists],
  })
  getAllArtists(@Query() query: ArtistQueryDto): Promise<Artists[]> {
    return this.artistsService.getArtists(query);
  }
  // update artist
  @Put('/:id')
  updateArtist(@Param('id') id: string, @Body() body: any) {
    return this.artistsService.updateArtist(id, body);
  }
  // delete an artist
  @Delete('/:id')
  deleteArtist(@Param('id') id: string) {
    return this.artistsService.deleteArtist(id);
  }

  // // get artists with songs
  // @Get(':id/songs')
  // getArtistWithSongs(@Param('id') id: string): any {
  //   try {
  //     const artist = this.artistsService.getArtistById(parseInt(id, 10));
  //     if (!artist) {
  //       throw new Error(`Artist not found with ID ${id}`);
  //     }

  //     const songs = this.songsService.getSongsByArtistId(artist.name);
  //     return { artist, songs };
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  // @Get('genre/:genre')
  // getArtistsWithSongsInGenre(@Param('genre') genre: string): any {
  //   try {
  //     const artists = this.artistsService.getArtistsWithSongsInGenre(genre);
  //     if (artists.length === 0) {
  //       throw new Error(`No artists found with songs in genre ${genre}`);
  //     }
  //     return artists;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
}
