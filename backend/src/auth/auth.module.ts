import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
        inject:[ConfigService],
        useFactory: (configService : ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'), // should be stored in env file
        signOptions:{
          expiresIn:`${configService.get<string>('JWT_EXPIRATION_TIME')}s`
        },
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
})
export class AuthModule {}
