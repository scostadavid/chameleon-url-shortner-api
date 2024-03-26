import { PrismaService } from '../common/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common/decorators';
import { ShortenedUrl } from '@prisma/client';
import { Observable, from } from 'rxjs';

@Injectable()
export class UrlsRepository {
  constructor(readonly prisma: PrismaService) {}

  findOne(id: number): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl
        .findUnique({
          where: {
            id,
          },
        })
        .catch((error) => {
          console.error('Error occurred while fetching shortened URL:', error);
          throw error;
        }),
    );
  }

  findOneByHash(hash: string): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl
        .findUnique({
          where: {
            hash,
          },
        })
        .catch((error) => {
          console.error('Error occurred while fetching shortened URL:', error);
          throw error;
        }),
    );
  }

  create(title: string, hash: string, url: string): Observable<ShortenedUrl> {
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

  findAll() {
    return from(this.prisma.shortenedUrl.findMany());
  }

  update(id: number, title: string, url: string): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl.update({
        where: {
          id,
        },
        data: {
          title,
          url,
        },
      }),
    );
  }

  remove(id: number): Observable<ShortenedUrl> {
    return from(
      this.prisma.shortenedUrl
        .delete({
          where: {
            id,
          },
        })
        .catch((error) => {
          console.error('Error occurred while fetching shortened URL:', error);
          throw error;
        }),
    );
  }
}
