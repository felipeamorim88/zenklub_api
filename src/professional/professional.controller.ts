import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { Professional } from 'src/entity/professional.entity';
import { ProfessionalDto } from "src/professional/professional.interface";

@Controller('professional')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

  @Get()
  async findAll(): Promise<Professional[]> {
    return await this.professionalService.findAll();
  }
  @Get('/:id')
  async findOne(@Param('id') id): Promise<Professional> {
    return await this.professionalService.findOne(id);
  }
  @Post()
  async create(@Body()professional: ProfessionalDto): Promise<Professional>{
    return await this.professionalService.create(professional)
  }
  @Patch('/:id')
  async update(@Param('id') id,@Body()professional: ProfessionalDto): Promise<Professional>{
    return await this.professionalService.update(id, professional)
  }
  @Delete('/:id')
  async Delete(@Param('id') id): Promise<Professional> {
    return await this.professionalService.delete(id);
  }
}