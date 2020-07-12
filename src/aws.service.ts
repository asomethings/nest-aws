import { Inject, Injectable } from '@nestjs/common'
import { AWS_MODULE_OPTIONS } from './aws.constants'
import { AwsModuleOptions } from './interfaces/aws-module-options.interface'

@Injectable()
export class AwsService {
  constructor(
    @Inject(AWS_MODULE_OPTIONS) private readonly options: AwsModuleOptions,
  ) {}
}
