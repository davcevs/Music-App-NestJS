import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongsService } from 'src/songs/songs.service';
import { Artists } from './artists.entity';
import { Repository } from 'typeorm';
import { ArtistQueryDto } from './dtos/artist-query.dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artists) private artistRepository: Repository<Artists>,
  ) {}
  createArtist(artist: Artists): Promise<Artists> {
    const newArtist: Artists = this.artistRepository.create(artist);
    return this.artistRepository.save(newArtist);
  }

  // get artists
  async getArtists(query: ArtistQueryDto): Promise<Artists[]> {
    return this.artistRepository.find({
      relations: {
        songs: true,
      },
    });
  }
  // update artist
  async updateArtist(id: string, artist: Artists): Promise<Artists> {
    return this.artistRepository.save(artist);
  }
  // delete artist
  async deleteArtist(id: string): Promise<void> {
    await this.artistRepository.delete(id);
  }
  // get artist by id
  getArtistById(id): Promise<Artists> {
    return this.artistRepository.findOneBy(id);
  }
}
