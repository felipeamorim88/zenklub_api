import { Module } from '@nestjs/common';
import { TimeslotController } from './timeslot.controller';
import { TimeslotService } from './timeslot.service';

@Module({
  imports: [],
  controllers: [TimeslotController],
  providers: [TimeslotService],
})
export class TimeslotModule {}
