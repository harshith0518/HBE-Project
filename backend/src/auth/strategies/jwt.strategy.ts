import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from '../interfaces/token-payload.dto';
import { UserService } from 'src/user/user.service';
import { UserAuthResponse } from 'src/user/interfaces/user-response.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private userService: UserService,
        private configService: ConfigService,
    ) {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: `${configService.get<string>('JWT_SECRET_KEY')}`,
        });
    }

    async validate(payload: TokenPayload):Promise<UserAuthResponse> {
        const user = await this.userService.findOneById(payload.userId);
        if (!user) {
        throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
