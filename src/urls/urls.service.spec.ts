import { Test, TestingModule } from '@nestjs/testing';
import { UrlsService } from './urls.service';
import { UrlsRepository } from './urls.repository';
import { PrismaService } from '../common/database/prisma/prisma.service';
// import { UrlsRepository } from './urls.repository';

describe('UrlsService', () => {
  let service: UrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlsService, UrlsRepository, PrismaService],
    }).compile();

    service = module.get<UrlsService>(UrlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
