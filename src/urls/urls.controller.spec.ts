import { Test, TestingModule } from '@nestjs/testing';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { UrlsRedirectController } from './urls.redirect.controller';
import { UrlsRepository } from './urls.repository';
import { PrismaService } from '../common/database/prisma/prisma.service';

describe('UrlsController', () => {
  let controller: UrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController, UrlsRedirectController],
      providers: [UrlsService, UrlsRepository, PrismaService],
    }).compile();

    controller = module.get<UrlsController>(UrlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
