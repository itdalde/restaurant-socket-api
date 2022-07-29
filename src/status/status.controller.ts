import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { StatusGateway } from './status.gateway';

@Controller('alert')
export class StatusController {

    constructor(private statusGateway: StatusGateway) {}

    @Post()
    @HttpCode(200)
    sendAlertToAll(@Body() dto: { message: any }) {
        this.statusGateway.sendToAll(dto.message);
        return dto;
    }
}
