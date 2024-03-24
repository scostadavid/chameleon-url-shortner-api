import { Injectable } from '@nestjs/common';
import { UrlRepository } from './repositories/url.repository';
import { Observable } from 'rxjs';
import { ShortenedUrl } from '@prisma/client';

@Injectable()
export class UrlService {
  constructor(private readonly repository: UrlRepository) {}

  getByHash(hash: string): Observable<ShortenedUrl> {
    return this.repository.get(hash);
  }

  shorten(title: string, url: string): Observable<ShortenedUrl> {
    const hash = Math.random().toString(36).slice(7); // fazer meu custom hash
    return this.repository.post(title, hash, url);
  }

  updateByHash(
    hash: string,
    title: string,
    url: string,
  ): Observable<ShortenedUrl> {
    return this.repository.put(title, hash, url);
  }

  destroyByHash(hash: string): Observable<ShortenedUrl> {
    return this.repository.destroy(hash);
  }
}
