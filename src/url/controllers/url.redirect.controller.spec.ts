import { Test, TestingModule } from '@nestjs/testing';
import { UrlRedirectController } from './url.redirect.controller';
import { UrlService } from '../url.service';
import { UrlRepository } from '../repositories/url.repository';
import { PrismaService } from '../../common/database/prisma/prisma.service';

describe('UrlRedirectController', () => {
  let controller: UrlRedirectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlRedirectController],
      providers: [PrismaService, UrlService, UrlRepository],
    }).compile();

    controller = module.get<UrlRedirectController>(UrlRedirectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
