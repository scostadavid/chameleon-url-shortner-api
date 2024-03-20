import { Injectable } from '@nestjs/common';
import { UrlRepository } from './url.repository';

@Injectable()
export class UrlService {
  constructor(private readonly repository: UrlRepository) {}

  shorten(title: string, url: string) {
    const hash = Math.random().toString(36).slice(7); // fazer meu custom hash
    return this.repository.put(title, hash, url);
  }
}
