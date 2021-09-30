import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import { createValidationSchema } from './validation.schema';

/**
 * Config Module
 */
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: createValidationSchema(),
    }),
    // db config can be added here, e.g. TypeOrmModule
  ],
})
export class ConfigModule {}
