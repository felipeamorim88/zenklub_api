import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Timeslot } from './timeslot.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number

    // add column explicitly here
  @Column()
  timeslotId: number;
  @ManyToOne(() => Timeslot, { nullable: false, eager: true })
  @JoinColumn({ name: "timeslotId" } )
  timeslot: Timeslot

  @Column()
  initialTime: Date
}