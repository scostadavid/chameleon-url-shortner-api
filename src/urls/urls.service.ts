import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { UrlsRepository } from './urls.repository';
import { Observable } from 'rxjs';
import { ShortenedUrl } from '@prisma/client';

@Injectable()
export class UrlsService {
  constructor(private readonly repository: UrlsRepository) {}

  create(createUrlDto: CreateUrlDto): Observable<ShortenedUrl> {
    const { title, url } = createUrlDto;
    const hash = Math.random().toString(36).slice(7);
    return this.repository.create(title, hash, url);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  findOneByHash(hash: string) {
    return this.repository.findOneByHash(hash);
  }

  update(id: number, updateUrlDto: UpdateUrlDto) {
    const { title, url } = updateUrlDto;
    return this.repository.update(id, title, url);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
