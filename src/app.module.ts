import { Module } from '@nestjs/common/decorators';
import { UrlModule } from './url/url.module';

@Module({
  imports: [UrlModule],
})
export class AppModule {}
