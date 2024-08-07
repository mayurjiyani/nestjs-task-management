// src/task/task.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './entities/task.entity';
import { TeamMember } from '../team/entities/team-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TeamMember])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
