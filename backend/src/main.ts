import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true , forbidNonWhitelisted:true})); //TUT so that our input and output requests are properly validated
  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:5173'], // React dev URL
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
