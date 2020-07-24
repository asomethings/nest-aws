import { Module } from '@nestjs/common'
import { AwsModule } from '../../src'

@Module({ imports: [AwsModule.forRoot()] })
export class AppModule {}
