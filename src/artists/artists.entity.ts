import { Genre } from 'src/enums/genre.enum';
import { Songs } from 'src/songs/songs.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artists {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
    nullable: false,
  })
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Songs, (song) => song.artist)
  songs: Songs;
}
