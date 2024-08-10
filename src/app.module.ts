import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { SongsController } from './songs/songs.controller';
import { ArtistsModule } from './artists/artists.module';
import { ArtistsController } from './artists/artists.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsService } from './songs/songs.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArtistsModule,
    DatabaseModule,
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
