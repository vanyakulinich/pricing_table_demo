import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const API_PREFIX = 'api'; // global prefix for api
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(API_PREFIX);

  // add validation pipes, interceptors and swagger init here

  await app.listen(configService.get('app.port'));
}
bootstrap();
