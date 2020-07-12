/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleMetadata, Type } from '@nestjs/common'

export interface AwsModuleOptions {
  region?: string
  accessKeyId?: string
  secretAccessKey?: string
}

export interface AwsOptionsFactory {
  createAwsOptions(): Promise<AwsModuleOptions> | AwsModuleOptions
}

export interface AwsModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<AwsOptionsFactory>
  useClass?: Type<AwsOptionsFactory>
  useFactory?: (...args: any[]) => Promise<AwsModuleOptions> | AwsModuleOptions
  inject?: any[]
}
