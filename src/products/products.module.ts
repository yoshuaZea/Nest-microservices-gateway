import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [
    NatsModule,
    ClientsModule.register([
      // * Using TCP protocole
      // {
      //   name: PRODUCT_SERVICE,
      //   transport: Transport.TCP,
      //   options: {
      //     host: envs.productMicroServiceHost,
      //     port: envs.productMicroServicePort,
      //   },
      // },
    ]),
  ],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
