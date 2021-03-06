import * as AWS from 'aws-sdk'
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service'

interface Type<T> extends Function {
  new (options: ServiceConfigurationOptions): T
}

export type AwsServiceType =
  | Type<AWS.ACM>
  | Type<AWS.APIGateway>
  | Type<AWS.ApplicationAutoScaling>
  | Type<AWS.AppStream>
  | Type<AWS.AutoScaling>
  | Type<AWS.Batch>
  | Type<AWS.Budgets>
  | Type<AWS.CloudDirectory>
  | Type<AWS.CloudFormation>
  | Type<AWS.CloudFront>
  | Type<AWS.CloudHSM>
  | Type<AWS.CloudSearch>
  | Type<AWS.CloudSearchDomain>
  | Type<AWS.CloudTrail>
  | Type<AWS.CloudWatch>
  | Type<AWS.CloudWatchEvents>
  | Type<AWS.CloudWatchLogs>
  | Type<AWS.CodeBuild>
  | Type<AWS.CodeCommit>
  | Type<AWS.CodeDeploy>
  | Type<AWS.CodePipeline>
  | Type<AWS.CognitoIdentity>
  | Type<AWS.CognitoIdentityServiceProvider>
  | Type<AWS.CognitoSync>
  | Type<AWS.ConfigService>
  | Type<AWS.CUR>
  | Type<AWS.DataPipeline>
  | Type<AWS.DeviceFarm>
  | Type<AWS.DirectConnect>
  | Type<AWS.DirectoryService>
  | Type<AWS.Discovery>
  | Type<AWS.DMS>
  | Type<AWS.DynamoDB>
  | Type<AWS.DynamoDBStreams>
  | Type<AWS.EC2>
  | Type<AWS.ECR>
  | Type<AWS.ECS>
  | Type<AWS.EFS>
  | Type<AWS.ElastiCache>
  | Type<AWS.ElasticBeanstalk>
  | Type<AWS.ELB>
  | Type<AWS.ELBv2>
  | Type<AWS.EMR>
  | Type<AWS.ES>
  | Type<AWS.ElasticTranscoder>
  | Type<AWS.Firehose>
  | Type<AWS.GameLift>
  | Type<AWS.Glacier>
  | Type<AWS.Health>
  | Type<AWS.IAM>
  | Type<AWS.ImportExport>
  | Type<AWS.Inspector>
  | Type<AWS.Iot>
  | Type<AWS.IotData>
  | Type<AWS.Kinesis>
  | Type<AWS.KinesisAnalytics>
  | Type<AWS.KMS>
  | Type<AWS.Lambda>
  | Type<AWS.LexRuntime>
  | Type<AWS.Lightsail>
  | Type<AWS.MachineLearning>
  | Type<AWS.MarketplaceCommerceAnalytics>
  | Type<AWS.MarketplaceMetering>
  | Type<AWS.MTurk>
  | Type<AWS.MobileAnalytics>
  | Type<AWS.OpsWorks>
  | Type<AWS.OpsWorksCM>
  | Type<AWS.Organizations>
  | Type<AWS.Pinpoint>
  | Type<AWS.Polly>
  | Type<AWS.RDS>
  | Type<AWS.Redshift>
  | Type<AWS.Rekognition>
  | Type<AWS.ResourceGroupsTaggingAPI>
  | Type<AWS.Route53>
  | Type<AWS.Route53Domains>
  | Type<AWS.S3>
  | Type<AWS.S3Control>
  | Type<AWS.ServiceCatalog>
  | Type<AWS.SES>
  | Type<AWS.Shield>
  | Type<AWS.SimpleDB>
  | Type<AWS.SMS>
  | Type<AWS.Snowball>
  | Type<AWS.SNS>
  | Type<AWS.SQS>
  | Type<AWS.SSM>
  | Type<AWS.StorageGateway>
  | Type<AWS.StepFunctions>
  | Type<AWS.STS>
  | Type<AWS.Support>
  | Type<AWS.SWF>
  | Type<AWS.XRay>
  | Type<AWS.WAF>
  | Type<AWS.WAFRegional>
  | Type<AWS.WorkDocs>
  | Type<AWS.WorkSpaces>
  | Type<AWS.CodeStar>
  | Type<AWS.LexModelBuildingService>
  | Type<AWS.MarketplaceEntitlementService>
  | Type<AWS.Athena>
  | Type<AWS.Greengrass>
  | Type<AWS.DAX>
  | Type<AWS.MigrationHub>
  | Type<AWS.CloudHSMV2>
  | Type<AWS.Glue>
  | Type<AWS.Mobile>
  | Type<AWS.Pricing>
  | Type<AWS.CostExplorer>
  | Type<AWS.MediaConvert>
  | Type<AWS.MediaLive>
  | Type<AWS.MediaPackage>
  | Type<AWS.MediaStore>
  | Type<AWS.MediaStoreData>
  | Type<AWS.AppSync>
  | Type<AWS.GuardDuty>
  | Type<AWS.MQ>
  | Type<AWS.Comprehend>
  | Type<AWS.IoTJobsDataPlane>
  | Type<AWS.KinesisVideoArchivedMedia>
  | Type<AWS.KinesisVideoMedia>
  | Type<AWS.KinesisVideo>
  | Type<AWS.SageMakerRuntime>
  | Type<AWS.SageMaker>
  | Type<AWS.Translate>
  | Type<AWS.ResourceGroups>
  | Type<AWS.AlexaForBusiness>
  | Type<AWS.Cloud9>
  | Type<AWS.ServerlessApplicationRepository>
  | Type<AWS.ServiceDiscovery>
  | Type<AWS.WorkMail>
  | Type<AWS.AutoScalingPlans>
  | Type<AWS.TranscribeService>
  | Type<AWS.Connect>
  | Type<AWS.ACMPCA>
  | Type<AWS.FMS>
  | Type<AWS.SecretsManager>
  | Type<AWS.IoTAnalytics>
  | Type<AWS.IoT1ClickDevicesService>
  | Type<AWS.IoT1ClickProjects>
  | Type<AWS.PI>
  | Type<AWS.Neptune>
  | Type<AWS.MediaTailor>
  | Type<AWS.EKS>
  | Type<AWS.Macie>
  | Type<AWS.DLM>
  | Type<AWS.Signer>
  | Type<AWS.Chime>
  | Type<AWS.PinpointEmail>
  | Type<AWS.RAM>
  | Type<AWS.Route53Resolver>
  | Type<AWS.PinpointSMSVoice>
  | Type<AWS.QuickSight>
  | Type<AWS.RDSDataService>
  | Type<AWS.Amplify>
  | Type<AWS.DataSync>
  | Type<AWS.RoboMaker>
  | Type<AWS.Transfer>
  | Type<AWS.GlobalAccelerator>
  | Type<AWS.ComprehendMedical>
  | Type<AWS.KinesisAnalyticsV2>
  | Type<AWS.MediaConnect>
  | Type<AWS.FSx>
  | Type<AWS.SecurityHub>
  | Type<AWS.AppMesh>
  | Type<AWS.LicenseManager>
  | Type<AWS.Kafka>
  | Type<AWS.ApiGatewayManagementApi>
  | Type<AWS.ApiGatewayV2>
  | Type<AWS.DocDB>
  | Type<AWS.Backup>
  | Type<AWS.WorkLink>
  | Type<AWS.Textract>
  | Type<AWS.ManagedBlockchain>
  | Type<AWS.MediaPackageVod>
  | Type<AWS.GroundStation>
  | Type<AWS.IoTThingsGraph>
  | Type<AWS.IoTEvents>
  | Type<AWS.IoTEventsData>
  | Type<AWS.Personalize>
  | Type<AWS.PersonalizeEvents>
  | Type<AWS.PersonalizeRuntime>
  | Type<AWS.ApplicationInsights>
  | Type<AWS.ServiceQuotas>
  | Type<AWS.EC2InstanceConnect>
  | Type<AWS.EventBridge>
  | Type<AWS.LakeFormation>
  | Type<AWS.ForecastService>
  | Type<AWS.ForecastQueryService>
  | Type<AWS.QLDB>
  | Type<AWS.QLDBSession>
  | Type<AWS.WorkMailMessageFlow>
  | Type<AWS.CodeStarNotifications>
  | Type<AWS.SavingsPlans>
  | Type<AWS.SSO>
  | Type<AWS.SSOOIDC>
  | Type<AWS.MarketplaceCatalog>
  | Type<AWS.DataExchange>
  | Type<AWS.SESV2>
  | Type<AWS.MigrationHubConfig>
  | Type<AWS.ConnectParticipant>
  | Type<AWS.AppConfig>
  | Type<AWS.IoTSecureTunneling>
  | Type<AWS.WAFV2>
  | Type<AWS.ElasticInference>
  | Type<AWS.Imagebuilder>
  | Type<AWS.Schemas>
  | Type<AWS.AccessAnalyzer>
  | Type<AWS.CodeGuruReviewer>
  | Type<AWS.CodeGuruProfiler>
  | Type<AWS.ComputeOptimizer>
  | Type<AWS.FraudDetector>
  | Type<AWS.Kendra>
  | Type<AWS.NetworkManager>
  | Type<AWS.Outposts>
  | Type<AWS.AugmentedAIRuntime>
  | Type<AWS.EBS>
  | Type<AWS.KinesisVideoSignalingChannels>
  | Type<AWS.Detective>
  | Type<AWS.CodeStarconnections>
  | Type<AWS.Synthetics>
  | Type<AWS.IoTSiteWise>
  | Type<AWS.Macie2>
  | Type<AWS.CodeArtifact>
  | Type<AWS.Honeycode>
