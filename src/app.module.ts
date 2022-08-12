import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import { StatusGateway } from './status/status.gateway';
import { StatusController } from './status/status.controller';
import {ReservationController} from './reservation/reservation.controller';
import {ReservationGateway} from './reservation/reservation.gateway';

@Module({
  imports: [],
  controllers: [AlertController, StatusController, ReservationController],
  providers: [ChatGateway, AlertGateway, StatusGateway, ReservationGateway],
})
export class AppModule {}
