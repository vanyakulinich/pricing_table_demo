import { object, string, number } from '@hapi/joi';
/**
 * Envs validation schema
 * @returns object typeof @hapi/joi object
 */
export const createValidationSchema = () =>
  object({
    NODE_ENV: string().required(),
    PORT: number().required(),
  });
