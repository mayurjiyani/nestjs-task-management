// src/team/team.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMember } from './entities/team-member.entity';
import { CreateTeamMembersDto } from './dtos/multiple-team-member.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
  ) {}

  async createTeamMembers(
    createTeamMembersDto: CreateTeamMembersDto,
  ): Promise<TeamMember[]> {
    const teamMembers: TeamMember[] = createTeamMembersDto.teamMembers.map(
      (dto) => {
        const teamMember = new TeamMember();
        teamMember.name = dto.name;
        teamMember.email = dto.email;
        return teamMember;
      },
    );
    return await this.teamMemberRepository.save(teamMembers);
  }
}
