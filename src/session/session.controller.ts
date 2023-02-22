import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from 'src/entity/Session.entity';
import { SessionDto } from "src/Session/Session.interface";

@Controller('Session')
export class SessionController {
  constructor(private SessionService: SessionService) {}

  @Get()
  async findAll(): Promise<Session[]> {
    return await this.SessionService.findAll();
  }
  @Post()
  async create(@Body()Session: SessionDto): Promise<Session>{
    return await this.SessionService.create(Session)
  }
}