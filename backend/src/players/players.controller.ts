import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerRequestDto } from './dto/create-player-request.dto';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService:PlayersService) {}
    
    @Post()
    async createPlayer(
        @Body() createPlayerRequest: CreatePlayerRequestDto,
    ) {
        return await this.playersService.createOne(createPlayerRequest);
    }

    @Get()
    async getPlayers():Promise<CreatePlayerRequestDto[]> {
        return this.playersService.getPlayers();
    }
}
