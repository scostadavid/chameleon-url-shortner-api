import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from '../url.service';
import { UrlRepository } from '../repositories/url.repository';
import { PrismaService } from '../../common/database/prisma/prisma.service';
import { UrlShortenController } from './url.shorten.controller';

describe('UrlShortenController', () => {
  let controller: UrlShortenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlShortenController],
      providers: [PrismaService, UrlService, UrlRepository],
    }).compile();

    controller = module.get<UrlShortenController>(UrlShortenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
