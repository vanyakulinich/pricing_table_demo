import * as Joi from '@hapi/joi';
/**
 * Envs validation schema
 * @returns object typeof @hapi/joi object
 */
export const createValidationSchema = () =>
  Joi.object({
    NODE_ENV: Joi.string().required(),
    PORT: Joi.number().required(),
  });
