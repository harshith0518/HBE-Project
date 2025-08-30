import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //TUT so that our input and output requests are properly validated
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
