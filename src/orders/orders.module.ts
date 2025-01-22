import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [
    NatsModule,
    ClientsModule.register([
      // * Using TCP protocole
      // {
      //   name: ORDER_SERVICE,
      //   transport: Transport.TCP,
      //   options: {
      //     host: envs.orderMicroServiceHost,
      //     port: envs.orderMicroServicePort,
      //   },
      // },
    ]),
  ],
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {}
