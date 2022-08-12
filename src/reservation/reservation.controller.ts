import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { ReservationGateway } from './reservation.gateway';

@Controller('reservation')
export class ReservationController {

    constructor(private statusGateway: ReservationGateway) {}

    @Post()
    @HttpCode(200)
    sendAlertToAll(@Body() dto) {
        this.statusGateway.sendToAll(dto);
        return dto;
    }
}
