import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { Timeslot } from 'src/entity/Timeslot.entity';
import { TimeslotDto } from "src/Timeslot/Timeslot.interface";

@Controller('Timeslot')
export class TimeslotController {
  constructor(private TimeslotService: TimeslotService) {}

  @Get()
  async findAll(): Promise<Timeslot[]> {
    return await this.TimeslotService.findAll();
  }

  @Get('/from')
  async fromRange(@Body()Timeslot: TimeslotDto): Promise<Timeslot[]>{
    return await this.TimeslotService.fromRange(Timeslot)
  }

  @Get('/:id')
  async findOne(@Param('id') id): Promise<Timeslot> {
    return await this.TimeslotService.findOne(id);
  }
  
  @Post()
  async create(@Body()Timeslot: TimeslotDto): Promise<Timeslot>{
    return await this.TimeslotService.create(Timeslot)
  }
  @Patch('/:id')
  async update(@Param('id') id,@Body()Timeslot: TimeslotDto): Promise<Timeslot>{
    return await this.TimeslotService.update(id, Timeslot)
  }
  @Delete('/:id')
  async Delete(@Param('id') id): Promise<Timeslot> {
    return await this.TimeslotService.delete(id);
  }
}