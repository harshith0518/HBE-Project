import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MealModule } from './meal/meal.module';
import { PaymentModule } from './payment/payment.module';
import { ReferralModule } from './referral/referral.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ComplaintModule } from './complaint/complaint.module';
import { NotificationModule } from './notification/notification.module';
import { CoinAndWalletModule } from './coin-and-wallet/coin-and-wallet.module';
import { RedisModule } from './redis/redis.module';
import { AdminModule } from './admin/admin.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { OffersAndCouponsModule } from './offers-and-coupons/offers-and-coupons.module';
import { DeliveryPartnerModule } from './delivery-partner/delivery-partner.module';
import { TiffinManagementModule } from './tiffin-management/tiffin-management.module';
import { SharedUtilitiesAndTypesModule } from './shared-utilities-and-types/shared-utilities-and-types.module';
import { NutritionModule } from './nutrition/nutrition.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService:ConfigService) => ({
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB'),
          // entities: configService.get<string[]>('DB_ENTITIES'),
          synchronize: configService.get<string>('DB_SYNC') === 'true',
          autoLoadEntities: configService.get<string>('AUTO_LOAD_ENTITIES') === 'true',
      })
    }),
    AuthModule,
    UserModule,
    MealModule,
    PaymentModule,
    ReferralModule,
    ChatbotModule,
    FeedbackModule,
    ComplaintModule,
    NotificationModule,
    CoinAndWalletModule,
    NutritionModule,
    SchedulerModule,
    OffersAndCouponsModule,
    DeliveryPartnerModule,
    AdminModule,
    TiffinManagementModule,
    SharedUtilitiesAndTypesModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService,
              {
                provide:APP_GUARD,
                useClass:JwtAuthGuard,
              }],
})
export class AppModule {}
