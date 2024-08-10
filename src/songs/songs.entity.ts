import { Genre } from 'src/enums/genre.enum';
import { Artists } from 'src/artists/artists.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Songs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  // @Column({
  //   nullable: false,
  // })
  // artist: string;

  @Column({ default: 0 })
  duration: number;

  @Column({
    enum: Genre,
    enumName: 'Genre',
  })
  genre: Genre;

  @Column({
    type: Date,
  })
  releaseDate: Date;

  // many artists to one song
 @ManyToOne(() => Artists, (artist) => artist.songs)
  artist: Artists;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
