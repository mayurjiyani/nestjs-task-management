import { ApiProperty } from '@nestjs/swagger';
import { TeamMemberDto } from './create-team-member.dto';

export class CreateTeamMembersDto {
  @ApiProperty({
    description: 'Array of team members to be created',
    type: [TeamMemberDto],
  })
  teamMembers: TeamMemberDto[];
}
