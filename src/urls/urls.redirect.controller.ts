import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { Observable, map } from 'rxjs';

@Controller('')
export class UrlsRedirectController {
  constructor(private readonly urlService: UrlsService) {}

  @Get(':hash')
  @Redirect()
  to(@Param('hash') hash: string): Observable<{ url: string }> {
    return this.urlService
      .findOneByHash(hash)
      .pipe(map((shortenedUrl) => ({ url: 'https://' + shortenedUrl.url })));
  }
}
