import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'ADMIN',
  CONSUMER = 'CONSUMER',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});
