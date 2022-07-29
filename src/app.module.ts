import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';
import { StatusGateway } from './status/status.gateway';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [ChatGateway, AlertGateway, StatusGateway],
})
export class AppModule {}
