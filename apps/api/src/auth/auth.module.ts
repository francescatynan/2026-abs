import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'local-dev-secret',
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_IN ?? 3600) },
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, RolesGuard],
  exports: [AuthService],
})
export class AuthModule {}
