import { Module } from '@nestjs/common';
import { ProfessionalModule } from './professional/professional.module';
import { TimeslotModule } from './timeslot/timeslot.module';
import { SessionModule } from './session/session.module';


@Module({
  imports: [TimeslotModule,ProfessionalModule, SessionModule],
})
export class AppModule {}
