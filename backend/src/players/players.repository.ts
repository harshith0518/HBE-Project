import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Player } from "./entities/player.entity";
import { Repository } from "typeorm";
import { CreatePlayerRequestDto } from "./dto/create-player-request.dto";



@Injectable()
export class PlayersRepository {
    constructor(
        @InjectRepository(Player)
        private readonly playersRepository:Repository<Player>
    ) {}

    async insertOne(createPlayerDto:CreatePlayerRequestDto)
    {
        const player = this.playersRepository.create(createPlayerDto)
        return await this.playersRepository.save(player); // saves into db
    }

    async findAll() : Promise<CreatePlayerRequestDto[]>
    {
        return this.playersRepository.find();
    }
}