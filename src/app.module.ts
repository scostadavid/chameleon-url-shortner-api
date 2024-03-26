import { Module } from '@nestjs/common/decorators';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [UrlsModule],
})
export class AppModule {}
