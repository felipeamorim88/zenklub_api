import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Session } from 'src/entity/session.entity';
import { SessionRepository } from 'src/repository/Session.repository';
import { TimeslotRepository } from 'src/repository/timeslot.repository';


import { SessionDto } from "src/Session/Session.interface";

@Injectable()
export class SessionService {
  async findAll(): Promise<Session[]> {
    return await SessionRepository.find();
  }

  async create(Session: SessionDto): Promise<Session> {
    Session.initialTime = new Date(Session.initialTime)
    //FindBy timeslot
    let sessionsDate = (await SessionRepository.find(
      {
        where: { timeslotId: Session.timeslotId }
      })).map(e => e.initialTime);
    //Find timeslot timeframe
    let timeslot = await TimeslotRepository.findOneBy({ id: Session.timeslotId })
    //Check availabillity
    const IsAvailable = this.IsAvailable(timeslot.initialTime, timeslot.finishTime, sessionsDate, Session.initialTime)
    if (IsAvailable) {
      return await SessionRepository.save(Session);
    } else {
      throw new HttpException('Unavailable timeslot for this session', HttpStatus.BAD_REQUEST);
    }
  }

  private addHours(date, hours): Date {
    // 👇 Make copy with "Date" constructor.
    const dateCopy = new Date(date);

    dateCopy.setHours(dateCopy.getHours() + hours);

    return dateCopy;
  }

  private IsAvailable(init: Date, end: Date, sessions: Array<Date>, requestedSession: Date): Boolean {
    if (requestedSession < init || requestedSession > end)
      return false
    let isAvailable = true
    sessions.forEach(e => {
      const endSession = this.addHours(e, 1)
      if (requestedSession >= e && requestedSession < endSession)
        isAvailable = false
    })
    return isAvailable
  }

}