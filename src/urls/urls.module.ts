import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { PrismaService } from 'src/common/database/prisma/prisma.service';
import { UrlsRepository } from './urls.repository';
import { UrlsRedirectController } from './urls.redirect.controller';

@Module({
  controllers: [UrlsController, UrlsRedirectController],
  providers: [UrlsService, UrlsRepository, PrismaService],
})
export class UrlsModule {}
