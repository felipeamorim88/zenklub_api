import { Module } from '@nestjs/common';
import { SessionController } from './Session.controller';
import { SessionService } from './session.service';

@Module({
  imports: [],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
