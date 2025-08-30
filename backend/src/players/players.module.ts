import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { PlayersRepository } from './players.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService,PlayersRepository]
})
export class PlayersModule {}
