import { DynamicModule, Global, Module, Provider } from '@nestjs/common'
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service'
import { AWS_MODULE_OPTIONS } from './aws.constants'
import { getAwsServiceToken } from './aws.utils'
import {
  AwsModuleAsyncOptions,
  AwsModuleOptions,
  AwsOptionsFactory,
} from './interfaces/aws-module-options.interface'
import { AwsServiceType } from './interfaces/aws-service.type'

@Global()
@Module({})
export class AwsModule {
  public static forRoot(options?: AwsModuleOptions): DynamicModule {
    return {
      module: AwsModule,
      providers: this.createProvider(options),
      exports: [AWS_MODULE_OPTIONS],
    }
  }

  private static createProvider(options?: AwsModuleOptions): Provider[] {
    return [{ provide: AWS_MODULE_OPTIONS, useValue: options || {} }]
  }

  public static forRootAsync(options: AwsModuleAsyncOptions): DynamicModule {
    return {
      module: AwsModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
      exports: [AWS_MODULE_OPTIONS],
    }
  }

  private static createAsyncProviders(
    options: AwsModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)]
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ]
  }

  private static createAsyncOptionsProvider(
    options: AwsModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: AWS_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      }
    }

    return {
      provide: AWS_MODULE_OPTIONS,
      useFactory: async (optionsFactory: AwsOptionsFactory) =>
        await optionsFactory.createAwsOptions(),
      inject: [options.useExisting || options.useClass],
    }
  }

  public static forFeature(...services: AwsServiceType[]): DynamicModule {
    const providers = this.createAwsProviders(services)
    return {
      module: AwsModule,
      providers: providers,
      exports: providers,
    }
  }

  private static createAwsProviders(services: AwsServiceType[]): Provider[] {
    return (services || []).map((service: AwsServiceType) => ({
      provide: getAwsServiceToken(service),
      useFactory: (options: AwsModuleOptions) => {
        return new service(this.createClientConfiguration(options))
      },
      inject: [AWS_MODULE_OPTIONS],
    }))
  }

  private static createClientConfiguration(
    moduleOptions: AwsModuleOptions,
  ): ServiceConfigurationOptions {
    const option: ServiceConfigurationOptions = {}
    if (moduleOptions.accessKeyId && moduleOptions.secretAccessKey) {
      option.credentials = {
        accessKeyId: moduleOptions.accessKeyId,
        secretAccessKey: moduleOptions.secretAccessKey,
      }
    }

    if (moduleOptions.region) {
      option.region = moduleOptions.region
    }
    return option
  }
}
