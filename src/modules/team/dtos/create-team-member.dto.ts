// src/team/dtos/create-team-member.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TeamMemberDto {
  @ApiProperty({
    description: 'Name of the team member',
    example: 'John Doe',
  })
  name: string;

  @ApiPropertyOptional({
    description: 'Email of the team member',
    example: 'john.doe@example.com',
  })
  email?: string;
}
