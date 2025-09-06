import { Controller, Post, Body, UseGuards, Res, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response,Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { UserAuthResponse } from 'src/user/interfaces/user-response.dto';
import { User } from 'src/user/entities/user.entity';
import { hash } from 'bcrypt';
import { Public } from './decorators/public..decorator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService:UserService,
  ) {}


  @Public()
  @Post('refresh')
  async refresh(@Req() req, @Res({ passthrough: true }) res: Response) {
    return this.authService.refreshTokens(req, res);
  }

  @Post('logout')
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    console.log('------------------came into logout--------------------');
    const user = req.user as UserAuthResponse;
    console.log(user);
    if (user) {
      await this.userService.removeRefreshToken(user.id);
    }
    
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    return { message: 'Logged out successfully' };
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login-user')
  async loginUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = req.user as UserAuthResponse;
    const tokens = await this.authService.generateTokens(user);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });
    console.log('----------login-successful-------------------\n\n\n\n\n');
    return { accessToken: tokens.accessToken };
  }

  @Public()
  @Post('register-user')
  async registerUser(
    @Body() body: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.create(body);

    const tokens = await this.authService.generateTokens(user);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    return { accessToken: tokens.accessToken };
  }


}
