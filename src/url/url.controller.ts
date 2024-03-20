import { Controller, Get } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly appService: UrlService) {}

  @Get()
  getHello() {
    return this.appService.shorten('youtube', 'youtube.com.br').then((res) => res);
  }
}


