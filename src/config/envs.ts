import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  APP_PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
  ORDERS_MICROSERVICE_HOST: string;
  ORDERS_MICROSERVICE_PORT: number;
  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    APP_PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    ORDERS_MICROSERVICE_HOST: joi.string().required(),
    ORDERS_MICROSERVICE_PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.APP_PORT,
  productMicroServiceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  productMicroServicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
  orderMicroServiceHost: envVars.ORDERS_MICROSERVICE_HOST,
  orderMicroServicePort: envVars.ORDERS_MICROSERVICE_PORT,
  nats_servers: envVars.NATS_SERVERS,
};
