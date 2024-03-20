import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { UrlRepository } from './url.repository';
import { PrismaService } from 'src/common/database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService, UrlService, UrlRepository],
  controllers: [UrlController],
})
export class UrlModule {}
