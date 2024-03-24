import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { UrlService } from '../url.service';
import { Observable, map } from 'rxjs';

@Controller('')
export class UrlRedirectController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':hash')
  @Redirect()
  to(@Param('hash') hash: string): Observable<{ url: string }> {
    return this.urlService
      .getByHash(hash)
      .pipe(map((shortenedUrl) => ({ url: 'https://' + shortenedUrl.url })));
  }
}
