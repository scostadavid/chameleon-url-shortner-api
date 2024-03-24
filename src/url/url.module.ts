import { Module } from '@nestjs/common';
import { UrlRedirectController } from './controllers/url.redirect.controller';
import { UrlService } from './url.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { UrlRepository } from './repositories/url.repository';
import { PrismaService } from 'src/common/database/prisma/prisma.service';
import { UrlShortenController } from './controllers/url.shorten.controller';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService, UrlService, UrlRepository],
  controllers: [UrlRedirectController, UrlShortenController],
})
export class UrlModule {}
