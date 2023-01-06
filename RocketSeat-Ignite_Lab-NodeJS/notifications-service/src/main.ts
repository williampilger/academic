import { AppModule } from '@infra/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe() );//necessário para trabalhar com validação de dados
  await app.listen(3000);
}
bootstrap();
