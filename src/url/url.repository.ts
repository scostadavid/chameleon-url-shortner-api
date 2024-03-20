import { PrismaService } from '../common/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ShortenedUrl } from '@prisma/client';

@Injectable()
export class UrlRepository {
  constructor(readonly prisma: PrismaService) {}

  async put(title: string, hash: string, url: string): Promise<ShortenedUrl> {
    // mesmo se já existir vamos criar
    const shortenedUrl = await this.prisma.shortenedUrl.create({
      data: {
        title,
        source_url: url,
        hash,
        clicks: 0,
      },
    });

    return shortenedUrl;
  }
}

