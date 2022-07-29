import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { StatusGateway } from './status.gateway';

@Controller('status')
export class StatusController {

    constructor(private statusGateway: StatusGateway) {}

    @Post()
    @HttpCode(200)
    sendAlertToAll(@Body() dto) {
        this.statusGateway.sendToAll(dto);
        return dto;
    }
}
