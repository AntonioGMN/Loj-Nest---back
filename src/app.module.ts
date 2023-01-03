import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ProdutosModule],
})
export class AppModule {}
