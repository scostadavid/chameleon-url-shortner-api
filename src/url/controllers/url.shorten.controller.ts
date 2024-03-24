import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UrlService } from '../url.service';
import { Observable, map } from 'rxjs';
import { ShortenedUrl } from '@prisma/client';

@Controller('url')
export class UrlShortenController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':hash')
  retrieve(@Param('hash') hash: string): Observable<ShortenedUrl> {
    return this.urlService
      .getByHash(hash)
      .pipe(map((shortenedUrl) => shortenedUrl));
  }

  @Post()
  shorten(
    @Body('title') title: string,
    @Body('url') url: string,
  ): Observable<{ hash: string }> {
    return this.urlService
      .shorten(title, url)
      .pipe(map(({ hash }) => ({ hash })));
  }

  @Put()
  update(
    @Body('title') title: string,
    @Body('url') url: string,
    @Body('hash') hash: string,
  ): Observable<ShortenedUrl> {
    return this.urlService
      .updateByHash(hash, title, url)
      .pipe(map((shortenedUrl) => shortenedUrl));
  }

  @Delete()
  destroy(@Body('hash') hash: string): Observable<ShortenedUrl> {
    return this.urlService
      .destroyByHash(hash)
      .pipe(map((shortenedUrl) => shortenedUrl));
  }
}
