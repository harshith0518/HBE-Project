import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserAuthResponse } from 'src/user/interfaces/user-response.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { compare,hash } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from './interfaces/token-payload.dto';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private readonly configService:ConfigService,
    private readonly jwtService:JwtService,
    private readonly userService:UserService,
  ) {}


  async generateTokens(user: UserAuthResponse) {
    const payload: TokenPayload = { userId: user.id, userRole: user.role };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: `${this.configService.get('JWT_EXPIRATION_TIME')}s`,
      secret: this.configService.get('JWT_SECRET_KEY'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: `${this.configService.get('JWT_REFRESH_EXPIRATION_TIME')}s`,
      secret: this.configService.get('JWT_REFRESH_SECRET_KEY'),
    });

    const hashedToken = await hash(refreshToken, 10);
    await this.userService.updateRefreshToken(user.id, hashedToken);

    return { accessToken, refreshToken };
  }

  async refreshTokens(req: Request, res: Response) {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) throw new UnauthorizedException('No refresh token');
    const payload: TokenPayload = this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET_KEY'),
    });
    const user = await this.userService.findOneForAuthById(payload.userId);
    if (!user || !user.refresh_token_hash) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const isMatch = await compare(refreshToken, user.refresh_token_hash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokens = await this.generateTokens(user);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });
    return { accessToken: tokens.accessToken };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user:User = await this.userService.findOneByEmail(email);
    if(!user) {
      throw new NotFoundException('invalid credentials.');
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('invalid credentials');
    }
    return user;
  }

}
