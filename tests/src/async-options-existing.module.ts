import { Module } from '@nestjs/common'
import { AwsModule, AwsModuleOptions, AwsOptionsFactory } from '../../src'

class ConfigService implements AwsOptionsFactory {
  createAwsOptions(): AwsModuleOptions {
    return {
      accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
      secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      region: 'ap-northeast-2',
    }
  }
}

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
class ConfigModule {}

@Module({
  imports: [
    AwsModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
})
export class AsyncOptionsExistingModule {}
