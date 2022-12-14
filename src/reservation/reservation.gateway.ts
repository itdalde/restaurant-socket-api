import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/reservation' })
export class ReservationGateway {

  @WebSocketServer() wss: Server;

  sendToAll(msg) {
    this.wss.emit('reservation', { type: 'Reservation', data: msg });
  }
}
