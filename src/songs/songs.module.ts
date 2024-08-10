import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { Module } from '@nestjs/common';
import { Songs } from './songs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Songs])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
