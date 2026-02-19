import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UserRole } from './user-role.enum';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 'admin-seed-user',
      email: 'temp@placeholder.com',
      passwordHash: bcrypt.hashSync('changeme123', 10),
      role: UserRole.ADMIN,
    },
  ];

  findByEmail(email: string): User | null {
    return this.users.find((user) => user.email === email) ?? null;
  }

  findById(id: string): User | null {
    return this.users.find((user) => user.id === id) ?? null;
  }

  findAll(): User[] {
    return this.users;
  }
}
