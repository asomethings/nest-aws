/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Inject } from '@nestjs/common'
import { getAwsServiceToken } from './aws.utils'
import { AwsServiceType } from './interfaces/aws-service.type'

export const InjectAwsService = (service: AwsServiceType) =>
  Inject(getAwsServiceToken(service))
