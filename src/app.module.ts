import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import { StatusGateway } from './status/status.gateway';
import { StatusController } from "./status/status.controller";

@Module({
  imports: [],
  controllers: [AlertController,StatusController],
  providers: [ChatGateway, AlertGateway, StatusGateway],
})
export class AppModule {}
