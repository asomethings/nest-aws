<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

**Alpha Release: Use it with caution**

AWS Module for Nest.js framework

## Installation

NPM

```
npm i --save nest-aws
```

Yarn

```
yarn add nest-aws
```

## Usage

Import AwsModule into root AwsModule

```typescript
@Module({
  imports: [
    AwsModule.forRoot({
      region: 'ap-northeast-2',
      accessKeyId: 'your-aws-access-key',
      secretAccessKeyId: 'your-aws-secret-key',
    }),
  ],
  providers: [...],
})
export class AppModule {}
```

Define AWS Services that you wan't to use

```typescript
import { S3, SES } from 'aws-sdk'

@Module({
  imports: [
    AwsModule.forFeature(S3, SES),
  ],
  providers: [...],
})
export class AppModule {}
```

Now, inject S3 and SES with InjectAwsService

```typescript
@Injectable()
export class UserService {
  constructor(
    @InjectAwsService(S3)
    private readonly s3: S3,
    @InjectAwsService(SES)
    private readonly ses: SES,
  ) {}
}
```

All AWS Services will be initiated with settings that you have provided in `forRoot`

## Options

```typescript
AwsModule.forRoot({
  // AWS Region (Optional)
  region: '',


  // AWS Access Key Id (Optional)
  accessKeyId: '...',

  // AWS Secret Access Key Id (Optional)
  secretAccessKeyId: '...',
}),
```

## Async Options

1. Use factory

```typescript
AwsModule.forRootAsync({
  useFactory: () => ({
    region: 'ap-northeast-2',
  }),
})
```

OR

```typescript
AwsModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    accessKeyId: configService.get('accessKeyId'),
    secretAccessKeyId: configService.get('secretAccessKeyId'),
  }),
  inject: [ConfigService],
})
```

2. Use Class

```typescript
AwsModule.forRootAsync({
  useClass: AwsConfigService
})
```

```typescript
class AwsConfigService implements AwsOptionsFactory {
  createAwsOptions(): Promise<AwsModuleOptions> | AwsModuleOptions {
    return {
      region: 'ap-northeast-2',
    }
  }
}
```

3. Use existing

```typescript
AwsModule.forRootAsync({
  imports: [ConfigModule],
  useExisting: ConfigService,
})

```

## TODO

- [x] Write Tests
- [ ] Support More Options
- [ ] Seperate AwsModule with AwsCoreModule (Like @nestjs/typeorm)
