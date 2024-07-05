import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './member.controller';
import { PrismaService } from './database/prisma.service';
import { MemberRepository } from './repositories/member-repository';
import { PrismaMemberRepository } from './repositories/prisma/prisma-member-repository';

@Module({
  imports: [],
  controllers: [AppController, MemberController],
  providers: [
    AppService, 
    PrismaService,
    {
      provide: MemberRepository,
      useClass: PrismaMemberRepository
    }
  ], 
})
export class AppModule {}
