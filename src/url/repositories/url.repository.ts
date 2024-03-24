import { PrismaService } from '../../common/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common/decorators';
import { ShortenedUrl } from '@prisma/client';
import { Observable, from } from 'rxjs';

@Injectable()
export class UrlRepository {
  constructor(readonly prisma: PrismaService) {}

  get(hash: string): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl
        .findFirst({
          where: {
            hash: hash,
          },
        })
        .catch((error) => {
          console.error('Error occurred while fetching shortened URL:', error);
          throw error;
        }),
    );
  }

  post(title: string, hash: string, url: string): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl.create({
        data: {
          title,
          url,
          hash,
          clicks: 0,
        },
      }),
    );
  }

  put(title: string, hash: string, url: string): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl.update({
        where: {
          hash,
        },
        data: {
          title,
          url,
        },
      }),
    );
  }

  destroy(hash: string): Observable<ShortenedUrl> {
    console.log('try delete', hash);
    return from(
      this.prisma.shortenedUrl
        .delete({
          where: {
            hash: hash,
          },
        })
        .catch((error) => {
          console.error('Error occurred while fetching shortened URL:', error);
          throw error;
        }),
    );
  }
}
