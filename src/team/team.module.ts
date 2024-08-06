// src/team/team.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMember } from './team-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamMember])],
  providers: [],
  controllers: [],
})
export class TeamModule {}
