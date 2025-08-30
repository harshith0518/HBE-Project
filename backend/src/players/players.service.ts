import { Injectable } from '@nestjs/common';
import { CreatePlayerRequestDto } from './dto/create-player-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {

    constructor(
        private readonly playersRepository:PlayersRepository
    ) {}

    async createOne(
        createPlayerRequest:CreatePlayerRequestDto
    ):Promise<Player>{
        return this.playersRepository.insertOne(createPlayerRequest);
    }

    async getPlayers():Promise<CreatePlayerRequestDto[]> {
        return this.playersRepository.findAll();
    }
}
