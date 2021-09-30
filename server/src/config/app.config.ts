import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  port: parseInt(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
}));
