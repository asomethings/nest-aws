import { AwsServiceType } from './interfaces/aws-service.type'

export const getAwsServiceToken = (service: AwsServiceType): string =>
  `AWS_${service['serviceIdentifier'].toUpperCase()}`
