// src/team/team.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMember } from './entities/team-member.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/frameworks/guards/jwt-auth.guard';
import { CreateTeamMembersDto } from './dtos/multiple-team-member.dto';

@ApiTags('team-mamabers')
@Controller('team-members')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({ summary: 'Create multiple team members' })
  @Post()
  async createTeamMembers(
    @Body() createTeamMembersDto: CreateTeamMembersDto,
  ): Promise<TeamMember[]> {
    return await this.teamService.createTeamMembers(createTeamMembersDto);
  }
}
