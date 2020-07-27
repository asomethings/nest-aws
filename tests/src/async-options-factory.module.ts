import { Module } from '@nestjs/common'
import { AwsModule } from '../../src'

@Module({
  imports: [
    AwsModule.forRootAsync({
      useFactory: () => ({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
        region: 'ap-northeast-2',
      }),
    }),
  ],
})
export class AsyncOptionsFactoryModule {}
