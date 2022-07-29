import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/alert' })
export class StatusGateway {

  @WebSocketServer() wss: Server;

  sendToAll(msg: any) {
    this.wss.emit('transaction', { type: 'Transaction', data: msg });
  }
}
