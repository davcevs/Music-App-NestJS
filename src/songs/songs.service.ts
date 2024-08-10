import { Injectable } from '@nestjs/common';
import { Songs } from './songs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Songs) private songsRepository: Repository<Songs>,
  ) {}
  // create a new song
  async createSong(body: SongCreateDto): Promise<Songs> {
    const newSong: Songs = this.songsRepository.create(body);
    return this.songsRepository.save(newSong);
  }
  async getSongById(id: string): Promise<Songs> {
    return await this.songsRepository.findOneByOrFail({ id });
  }
  // update a song
  async updateSong(id: string, body: SongUpdateDto): Promise<Songs> {
    const song = await this.songsRepository.findOneByOrFail({ id });
    const updatedSongs = Object.assign(song, body);
    // const updatedSong = this.songsRepository.merge(song, body);
    return this.songsRepository.save(updatedSongs);
  }
  // delete a song
  async deleteSong(id: string): Promise<void> {
    await this.songsRepository.delete(id);
  }

  // // get songs by artist id
  // getSongsByArtistId(artistName: string): Songs[] {
  //   const filteredSongs = this.songs.filter(
  //     (song) => song.artist === artistName,
  //   );

  //   return filteredSongs.map((song) => ({
  //     ...song,
  //     title: song.title,
  //   }));
  // }
  // getSongsByGenre(genre: string): Songs[] {
  //   const filteredSongs = this.songs.filter((song) => song.genre === genre);
  //   return filteredSongs.map((song) => ({ ...song, title: song.title }));
  // }
}
