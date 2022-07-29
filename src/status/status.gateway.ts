import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/status' })
export class StatusGateway {

  @WebSocketServer() wss: Server;

  sendToAll(msg) {
    this.wss.emit('transaction', { type: 'Transaction', data: msg });
  }
}
