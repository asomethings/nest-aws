import { Test, TestingModule } from '@nestjs/testing'
import { DynamoDB, EC2, ElastiCache, Lambda, S3, SES, SNS } from 'aws-sdk'
import { AwsModule } from '../src'
import { getAwsServiceToken } from '../src/aws.utils'
import { AppModule } from './src/app.module'
import { AsyncOptionsClassModule } from './src/async-options-class.module'
import { AsyncOptionsExistingModule } from './src/async-options-existing.module'
import { AsyncOptionsFactoryModule } from './src/async-options-factory.module'

describe('AwsModule', () => {
  let module: TestingModule

  describe('async class options with one feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AsyncOptionsClassModule, AwsModule.forFeature(S3)],
      }).compile()
    })

    it('should inject s3 with credentials', () => {
      const s3 = module.get<S3>(getAwsServiceToken(S3))
      expect(s3).toBeDefined()
      expect(s3.config.region).toEqual('ap-northeast-2')
      expect(s3.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async class options with multiple feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AsyncOptionsClassModule, AwsModule.forFeature(S3, DynamoDB)],
      }).compile()
    })

    it('should inject s3 with credentials', () => {
      const s3 = module.get<S3>(getAwsServiceToken(S3))

      expect(s3).toBeDefined()
      expect(s3.config.region).toEqual('ap-northeast-2')
      expect(s3.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
    it('should inject dynamodb with credentials', () => {
      const dynamodb = module.get<DynamoDB>(getAwsServiceToken(DynamoDB))

      expect(dynamodb).toBeDefined()
      expect(dynamodb.config.region).toEqual('ap-northeast-2')
      expect(dynamodb.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async existing options with one feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AsyncOptionsExistingModule, AwsModule.forFeature(SES)],
      }).compile()
    })

    it('should inject ses with credentials', () => {
      const ses = module.get<SES>(getAwsServiceToken(SES))

      expect(ses).toBeDefined()
      expect(ses.config.region).toEqual('ap-northeast-2')
      expect(ses.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async existing options with multiple feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AsyncOptionsExistingModule, AwsModule.forFeature(SES, SNS)],
      }).compile()
    })

    it('should inject ses with credentials', () => {
      const ses = module.get<SES>(getAwsServiceToken(SES))

      expect(ses).toBeDefined()
      expect(ses.config.region).toEqual('ap-northeast-2')
      expect(ses.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
    it('should inject sns with credentials', () => {
      const sns = module.get<SNS>(getAwsServiceToken(SNS))

      expect(sns).toBeDefined()
      expect(sns.config.region).toEqual('ap-northeast-2')
      expect(sns.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async factory options with one feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AsyncOptionsFactoryModule, AwsModule.forFeature(ElastiCache)],
      }).compile()
    })

    it('should inject elastic cache with credentials', () => {
      const elasticCache = module.get<ElastiCache>(
        getAwsServiceToken(ElastiCache),
      )

      expect(elasticCache).toBeDefined()
      expect(elasticCache.config.region).toEqual('ap-northeast-2')
      expect(elasticCache.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async factory options with multiple feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [
          AsyncOptionsFactoryModule,
          AwsModule.forFeature(ElastiCache, Lambda),
        ],
      }).compile()
    })

    it('should inject elastic cache with credentials', () => {
      const elasticCache = module.get<ElastiCache>(
        getAwsServiceToken(ElastiCache),
      )

      expect(elasticCache).toBeDefined()
      expect(elasticCache.config.region).toEqual('ap-northeast-2')
      expect(elasticCache.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })

    it('should inject lambda with credentials', () => {
      const lambda = module.get<Lambda>(getAwsServiceToken(Lambda))

      expect(lambda).toBeDefined()
      expect(lambda.config.region).toEqual('ap-northeast-2')
      expect(lambda.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('async factory options with multiple feature', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [
          AsyncOptionsFactoryModule,
          AwsModule.forFeature(ElastiCache, Lambda),
        ],
      }).compile()
    })

    it('should inject elastic cache with credentials', () => {
      const elasticCache = module.get<ElastiCache>(
        getAwsServiceToken(ElastiCache),
      )

      expect(elasticCache).toBeDefined()
      expect(elasticCache.config.region).toEqual('ap-northeast-2')
      expect(elasticCache.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })

    it('should inject lambda with credentials', () => {
      const lambda = module.get<Lambda>(getAwsServiceToken(Lambda))

      expect(lambda).toBeDefined()
      expect(lambda.config.region).toEqual('ap-northeast-2')
      expect(lambda.config.credentials).toEqual({
        accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
        secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      })
    })
  })

  describe('delegate aws-sdk to pick up configuration', () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [AppModule, AwsModule.forFeature(EC2)],
      }).compile()
    })

    it('should inject ec2', () => {
      const ec2 = module.get<EC2>(getAwsServiceToken(EC2))

      expect(ec2).toBeDefined()
    })
  })
})
