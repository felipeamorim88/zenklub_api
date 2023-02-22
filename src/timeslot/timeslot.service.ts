import { Inject, Injectable } from '@nestjs/common';
import { Timeslot } from 'src/entity/timeslot.entity';
import {TimeslotRepository} from 'src/repository/timeslot.repository';
import { TimeslotDto } from "src/timeslot/timeslot.interface";
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm"

@Injectable()
export class TimeslotService {
  async findAll(): Promise<Timeslot[]> {
    return await TimeslotRepository.find();
  }
  async fromRange(Timeslot: TimeslotDto): Promise<Timeslot[]> {
    Timeslot.initialTime = new Date(Timeslot.initialTime)
    Timeslot.finishTime = new Date(Timeslot.finishTime)
    return await TimeslotRepository.find({
      where: {
          initialTime: MoreThanOrEqual(Timeslot.initialTime),
          finishTime: LessThanOrEqual(Timeslot.finishTime),
          professionalId:Timeslot.professionalId
      },
  });
  }
  async findOne(id:string): Promise<Timeslot> {
    return await TimeslotRepository.findOneBy({id:parseInt(id)});
  }
  async create(Timeslot: TimeslotDto): Promise<Timeslot> {
    Timeslot.initialTime = new Date(Timeslot.initialTime)
    Timeslot.finishTime = new Date(Timeslot.finishTime)
    return await TimeslotRepository.save(Timeslot);
  }
  async update(id:string, Timeslot: TimeslotDto): Promise<any> {
    return await TimeslotRepository.update(id,Timeslot);
  }
  async delete(id:string): Promise<any> {
    return await TimeslotRepository.delete(id);
  }
}