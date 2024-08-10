import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { Artists } from './artists.entity';
import { SongsModule } from '../songs/songs.module'; // Import SongsModule correctly

@Module({
  imports: [TypeOrmModule.forFeature([Artists])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
