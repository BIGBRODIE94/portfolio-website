// AWS SDK v3 imports
import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2'
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3'
import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts'
import { AWS_SERVICES, COMMAND_CATEGORIES, getAllCommands, searchCommands, getServiceInfo, getServiceCommands } from './awsCommandDatabase.js'

// Store AWS credentials (these should be set by user via terminal)
let awsCredentials = {
  accessKeyId: null,
  secretAccessKey: null,
  region: 'us-east-1'
}

export const initAWS = (credentials) => {
  awsCredentials = { ...awsCredentials, ...credentials }
}

export const executeAWSCommand = async (command, term) => {
  const parts = command.toLowerCase().split(' ')
  
  // AWS CLI version
  if (command.includes('--version')) {
    term.writeln('\x1b[32maws-cli/2.13.0 Python/3.11.0 Darwin/25.0.0 source/arm64\x1b[0m')
    return
  }

  // AWS configure
  if (command.includes('configure')) {
    term.writeln('\x1b[33m⚙️  AWS Configuration\x1b[0m')
    term.writeln('')
    term.writeln('To connect your AWS account, you need to set up credentials:')
    term.writeln('')
    term.writeln('\x1b[36m1. Option 1: Environment Variables\x1b[0m')
    term.writeln('   export AWS_ACCESS_KEY_ID="your-access-key"')
    term.writeln('   export AWS_SECRET_ACCESS_KEY="your-secret-key"')
    term.writeln('   export AWS_DEFAULT_REGION="us-east-1"')
    term.writeln('')
    term.writeln('\x1b[36m2. Option 2: AWS CLI Configuration\x1b[0m')
    term.writeln('   Use your local AWS CLI configuration')
    term.writeln('   Credentials from ~/.aws/credentials will be used')
    term.writeln('')
    term.writeln('\x1b[36m3. Demo Mode\x1b[0m')
    term.writeln('   Currently running in demo mode with sample data')
    term.writeln('')
    term.writeln('\x1b[33mNote:\x1b[0m For security, never hardcode credentials in the browser.')
    term.writeln('Consider using AWS Cognito or temporary credentials via STS.')
    return
  }

  // AWS S3 commands
  if (command.includes('s3 ls')) {
    term.writeln('\x1b[33m📦 Listing S3 Buckets...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample buckets\x1b[0m')
      term.writeln('')
      term.writeln('2024-01-15 10:23:45 \x1b[32mcosmos-centralized-logs-production\x1b[0m')
      term.writeln('2024-02-20 14:30:12 \x1b[32mcosmos-cloudtrail-logs-428630506955\x1b[0m')
      term.writeln('2024-03-10 09:15:33 \x1b[32mcosmos-config-bucket-govcloud\x1b[0m')
      term.writeln('2024-04-05 16:45:21 \x1b[32mcosmos-wiz-sensor-configs\x1b[0m')
      term.writeln('2023-12-01 11:20:55 \x1b[32mvdmstest-firehose-logs\x1b[0m')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
      return
    }

    try {
      const s3Client = new S3Client({
        region: awsCredentials.region,
        credentials: {
          accessKeyId: awsCredentials.accessKeyId,
          secretAccessKey: awsCredentials.secretAccessKey
        }
      })

      const data = await s3Client.send(new ListBucketsCommand({}))
      
      if (data.Buckets && data.Buckets.length > 0) {
        data.Buckets.forEach(bucket => {
          const date = bucket.CreationDate.toISOString().split('T')[0]
          term.writeln(`${date} \x1b[32m${bucket.Name}\x1b[0m`)
        })
      } else {
        term.writeln('\x1b[33mNo buckets found\x1b[0m')
      }
    } catch (error) {
      term.writeln(`\x1b[31m❌ Error: ${error.message}\x1b[0m`)
      term.writeln('\x1b[33mFalling back to demo mode...\x1b[0m')
    }
    return
  }

  // AWS EC2 commands
  if (command.includes('ec2 describe-instances')) {
    term.writeln('\x1b[33m🖥️  Listing EC2 Instances...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample instances\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬──────────────┬─────────────┬────────────┐')
      term.writeln('│ Instance ID         │ Type         │ State       │ Name       │')
      term.writeln('├─────────────────────┼──────────────┼─────────────┼────────────┤')
      term.writeln('│ \x1b[36mi-011f307ce94bc8f98\x1b[0m │ t3.medium    │ \x1b[32mrunning\x1b[0m     │ Web-Server │')
      term.writeln('│ \x1b[36mi-086230c5a494562fe\x1b[0m │ t3.large     │ \x1b[32mrunning\x1b[0m     │ App-Server │')
      term.writeln('│ \x1b[36mi-0a3b4c5d6e7f8g9h0\x1b[0m │ t3.xlarge    │ \x1b[32mrunning\x1b[0m     │ DB-Server  │')
      term.writeln('│ \x1b[36mi-0b4c5d6e7f8g9h0a1\x1b[0m │ t3.small     │ \x1b[33mstopped\x1b[0m     │ Test-Srv   │')
      term.writeln('└─────────────────────┴──────────────┴─────────────┴────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
      return
    }

    try {
      const ec2Client = new EC2Client({
        region: awsCredentials.region,
        credentials: {
          accessKeyId: awsCredentials.accessKeyId,
          secretAccessKey: awsCredentials.secretAccessKey
        }
      })

      const data = await ec2Client.send(new DescribeInstancesCommand({}))
      
      if (data.Reservations && data.Reservations.length > 0) {
        data.Reservations.forEach(reservation => {
          reservation.Instances.forEach(instance => {
            const name = instance.Tags?.find(tag => tag.Key === 'Name')?.Value || 'N/A'
            term.writeln(`\x1b[36m${instance.InstanceId}\x1b[0m | ${instance.InstanceType} | \x1b[32m${instance.State.Name}\x1b[0m | ${name}`)
          })
        })
      } else {
        term.writeln('\x1b[33mNo instances found\x1b[0m')
      }
    } catch (error) {
      term.writeln(`\x1b[31m❌ Error: ${error.message}\x1b[0m`)
    }
    return
  }

  // AWS STS get-caller-identity
  if (command.includes('sts get-caller-identity')) {
    term.writeln('\x1b[33m🔐 Getting AWS Identity...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode\x1b[0m')
      term.writeln('{')
      term.writeln('  "UserId": "AIDACKCEVSQ6C2EXAMPLE",')
      term.writeln('  "Account": "428630506955",')
      term.writeln('  "Arn": "arn:aws:iam::428630506955:user/affan-chowdhury"')
      term.writeln('}')
      return
    }

    try {
      const stsClient = new STSClient({
        region: awsCredentials.region,
        credentials: {
          accessKeyId: awsCredentials.accessKeyId,
          secretAccessKey: awsCredentials.secretAccessKey
        }
      })

      const data = await stsClient.send(new GetCallerIdentityCommand({}))
      term.writeln(JSON.stringify(data, null, 2))
    } catch (error) {
      term.writeln(`\x1b[31m❌ Error: ${error.message}\x1b[0m`)
    }
    return
  }

  // AWS IAM commands
  if (command.includes('iam list-users')) {
    term.writeln('\x1b[33m👥 Listing IAM Users...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample users\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬─────────────────────────────┬─────────────────┐')
      term.writeln('│ User Name           │ Create Date                  │ Password Last   │')
      term.writeln('├─────────────────────┼─────────────────────────────┼─────────────────┤')
      term.writeln('│ \x1b[36maffan-chowdhury\x1b[0m     │ 2023-01-15T10:30:00Z        │ 2024-01-10      │')
      term.writeln('│ \x1b[36madmin-user\x1b[0m         │ 2023-02-20T14:15:00Z        │ 2024-01-05      │')
      term.writeln('│ \x1b[36mdev-user\x1b[0m           │ 2023-03-10T09:45:00Z        │ 2024-01-08      │')
      term.writeln('│ \x1b[36mci-cd-user\x1b[0m         │ 2023-04-05T16:20:00Z        │ Never           │')
      term.writeln('└─────────────────────┴─────────────────────────────┴─────────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
    }
    return
  }

  // AWS CloudWatch commands
  if (command.includes('cloudwatch list-metrics')) {
    term.writeln('\x1b[33m📊 Listing CloudWatch Metrics...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample metrics\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬─────────────────────┬─────────────────────┐')
      term.writeln('│ Namespace           │ Metric Name          │ Dimensions          │')
      term.writeln('├─────────────────────┼─────────────────────┼─────────────────────┤')
      term.writeln('│ \x1b[36mAWS/EC2\x1b[0m              │ CPUUtilization       │ InstanceId=i-xxx   │')
      term.writeln('│ \x1b[36mAWS/EC2\x1b[0m              │ NetworkIn            │ InstanceId=i-xxx   │')
      term.writeln('│ \x1b[36mAWS/EC2\x1b[0m              │ NetworkOut           │ InstanceId=i-xxx   │')
      term.writeln('│ \x1b[36mAWS/EC2\x1b[0m              │ DiskReadOps          │ InstanceId=i-xxx   │')
      term.writeln('│ \x1b[36mAWS/S3\x1b[0m               │ BucketSizeBytes      │ BucketName=xxx     │')
      term.writeln('│ \x1b[36mAWS/S3\x1b[0m               │ NumberOfObjects      │ BucketName=xxx     │')
      term.writeln('│ \x1b[36mAWS/Lambda\x1b[0m           │ Duration             │ FunctionName=xxx   │')
      term.writeln('│ \x1b[36mAWS/Lambda\x1b[0m           │ Invocations          │ FunctionName=xxx   │')
      term.writeln('└─────────────────────┴─────────────────────┴─────────────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
    }
    return
  }

  // AWS Lambda commands
  if (command.includes('lambda list-functions')) {
    term.writeln('\x1b[33m⚡ Listing Lambda Functions...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample functions\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬─────────────────────┬─────────────────────┬──────────────┐')
      term.writeln('│ Function Name       │ Runtime             │ Code Size           │ Last Modified│')
      term.writeln('├─────────────────────┼─────────────────────┼─────────────────────┼──────────────┤')
      term.writeln('│ \x1b[36mhello-world\x1b[0m          │ python3.9            │ 1024 bytes         │ 2024-01-15   │')
      term.writeln('│ \x1b[36mapi-handler\x1b[0m          │ nodejs18.x            │ 2048 bytes         │ 2024-01-14   │')
      term.writeln('│ \x1b[36mdata-processor\x1b[0m       │ python3.9            │ 4096 bytes         │ 2024-01-13   │')
      term.writeln('│ \x1b[36mnotification-sender\x1b[0m  │ nodejs18.x            │ 1536 bytes         │ 2024-01-12   │')
      term.writeln('└─────────────────────┴─────────────────────┴─────────────────────┴──────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
    }
    return
  }

  // AWS RDS commands
  if (command.includes('rds describe-db-instances')) {
    term.writeln('\x1b[33m🗄️  Listing RDS Instances...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample RDS instances\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬─────────────┬─────────────┬─────────────────┐')
      term.writeln('│ DB Instance ID      │ Engine      │ Status      │ Endpoint        │')
      term.writeln('├─────────────────────┼─────────────┼─────────────┼─────────────────┤')
      term.writeln('│ \x1b[36mprod-database\x1b[0m        │ mysql       │ \x1b[32mavailable\x1b[0m     │ prod-db.xxx.com │')
      term.writeln('│ \x1b[36mstaging-database\x1b[0m     │ postgres    │ \x1b[32mavailable\x1b[0m     │ staging.xxx.com │')
      term.writeln('│ \x1b[36mtest-database\x1b[0m        │ mysql       │ \x1b[33mstopped\x1b[0m       │ test.xxx.com    │')
      term.writeln('│ \x1b[36mdev-database\x1b[0m         │ postgres    │ \x1b[32mavailable\x1b[0m     │ dev.xxx.com     │')
      term.writeln('└─────────────────────┴─────────────┴─────────────┴─────────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
    }
    return
  }

  // AWS VPC commands
  if (command.includes('vpc describe-vpcs')) {
    term.writeln('\x1b[33m🌐 Listing VPCs...\x1b[0m')
    term.writeln('')
    
    if (!awsCredentials.accessKeyId) {
      term.writeln('\x1b[33m⚠️  Demo Mode - Showing sample VPCs\x1b[0m')
      term.writeln('')
      term.writeln('┌─────────────────────┬─────────────────────┬─────────────────────┬─────────────┐')
      term.writeln('│ VpcId               │ State               │ CidrBlock           │ Name        │')
      term.writeln('├─────────────────────┼─────────────────────┼─────────────────────┼─────────────┤')
      term.writeln('│ \x1b[36mvpc-1234567890abcdef0\x1b[0m │ \x1b[32mavailable\x1b[0m         │ 10.0.0.0/16        │ Production  │')
      term.writeln('│ \x1b[36mvpc-0987654321fedcba0\x1b[0m │ \x1b[32mavailable\x1b[0m         │ 10.1.0.0/16        │ Staging     │')
      term.writeln('│ \x1b[36mvpc-abcdef1234567890\x1b[0m  │ \x1b[32mavailable\x1b[0m         │ 10.2.0.0/16        │ Development │')
      term.writeln('│ \x1b[36mvpc-fedcba0987654321\x1b[0m  │ \x1b[32mavailable\x1b[0m         │ 172.16.0.0/16      │ Testing     │')
      term.writeln('└─────────────────────┴─────────────────────┴─────────────────────┴─────────────┘')
      term.writeln('')
      term.writeln('\x1b[36m💡 Tip: Run "aws configure" to set up real AWS credentials\x1b[0m')
    }
    return
  }

  // AWS help command with comprehensive service listing
  if (command.includes('help')) {
    showAWSHelp(term, command)
    return
  }

  // AWS services command - list all services
  if (command === 'aws services' || command === 'aws list-services') {
    showAWSServices(term)
    return
  }

  // AWS search command - search for specific commands
  if (command.startsWith('aws search')) {
    const searchTerm = command.replace('aws search', '').trim()
    if (searchTerm) {
      showCommandSearch(term, searchTerm)
    } else {
      term.writeln('\x1b[31m❌ Please provide a search term: aws search <term>\x1b[0m')
    }
    return
  }

  // AWS service commands - show commands for a specific service
  if (command.startsWith('aws ') && !command.includes(' ')) {
    const serviceName = command.replace('aws ', '').trim()
    showServiceCommands(term, serviceName)
    return
  }

  // Default AWS help
  showAWSHelp(term)
}

// Enhanced AWS Help function
const showAWSHelp = (term, command = '') => {
  term.writeln('\x1b[33m╔═══════════════════════════════════════════════════════════════╗\x1b[0m')
  term.writeln('\x1b[33m║              AWS CLI Command Reference v2.0                  ║\x1b[0m')
  term.writeln('\x1b[33m╚═══════════════════════════════════════════════════════════════╝\x1b[0m')
  term.writeln('')
  term.writeln('\x1b[1;36mAvailable AWS CLI Commands:\x1b[0m')
  term.writeln('')
  term.writeln('  \x1b[32maws --version\x1b[0m              - Show AWS CLI version')
  term.writeln('  \x1b[32maws configure\x1b[0m              - Configure AWS credentials')
  term.writeln('  \x1b[32maws services\x1b[0m               - List all AWS services')
  term.writeln('  \x1b[32maws search <term>\x1b[0m          - Search commands by keyword')
  term.writeln('  \x1b[32maws <service>\x1b[0m              - Show commands for specific service')
  term.writeln('')
  term.writeln('\x1b[1;33mPopular Commands:\x1b[0m')
  term.writeln('  \x1b[32maws s3 ls\x1b[0m                  - List S3 buckets')
  term.writeln('  \x1b[32maws ec2 describe-instances\x1b[0m - List EC2 instances')
  term.writeln('  \x1b[32maws sts get-caller-identity\x1b[0m - Get AWS account info')
  term.writeln('  \x1b[32maws iam list-users\x1b[0m        - List IAM users')
  term.writeln('  \x1b[32maws cloudwatch list-metrics\x1b[0m - List CloudWatch metrics')
  term.writeln('')
  term.writeln('\x1b[1;35mService Categories:\x1b[0m')
  term.writeln('  \x1b[36mCompute:\x1b[0m EC2, ECS, EKS, Lambda')
  term.writeln('  \x1b[36mStorage:\x1b[0m S3, EFS')
  term.writeln('  \x1b[36mDatabase:\x1b[0m RDS, DynamoDB')
  term.writeln('  \x1b[36mNetworking:\x1b[0m VPC, CloudFront')
  term.writeln('  \x1b[36mSecurity:\x1b[0m IAM, KMS, Secrets Manager')
  term.writeln('  \x1b[36mMonitoring:\x1b[0m CloudWatch, CloudTrail')
  term.writeln('')
  term.writeln('\x1b[36m💡 Try: aws services, aws search ec2, aws s3\x1b[0m')
  term.writeln('\x1b[33m⚠️  Currently in demo mode. Set up credentials to use real AWS commands.\x1b[0m')
}

// Show all AWS services
const showAWSServices = (term) => {
  term.writeln('\x1b[33m📋 AWS Services Available in This Terminal:\x1b[0m')
  term.writeln('')
  
  Object.entries(COMMAND_CATEGORIES).forEach(([category, services]) => {
    term.writeln(`\x1b[1;36m${category.toUpperCase()}:\x1b[0m`)
    services.forEach(service => {
      const serviceInfo = AWS_SERVICES[service]
      if (serviceInfo) {
        term.writeln(`  \x1b[32m${service.padEnd(15)}\x1b[0m - ${serviceInfo.description}`)
      }
    })
    term.writeln('')
  })
  
  term.writeln('\x1b[36m💡 Use "aws <service>" to see commands for a specific service\x1b[0m')
  term.writeln('\x1b[36m💡 Example: aws ec2, aws s3, aws iam\x1b[0m')
}

// Show commands for a specific service
const showServiceCommands = (term, serviceName) => {
  const serviceInfo = getServiceInfo(serviceName)
  
  if (!serviceInfo) {
    term.writeln(`\x1b[31m❌ Service '${serviceName}' not found\x1b[0m`)
    term.writeln('\x1b[33m💡 Use "aws services" to see all available services\x1b[0m')
    return
  }
  
  term.writeln(`\x1b[33m🔧 ${serviceInfo.name} (${serviceName.toUpperCase()})\x1b[0m`)
  term.writeln(`\x1b[36m${serviceInfo.description}\x1b[0m`)
  term.writeln('')
  term.writeln('\x1b[1;32mAvailable Commands:\x1b[0m')
  
  // Group commands by category for better readability
  const commands = serviceInfo.commands
  const chunkSize = 3
  for (let i = 0; i < commands.length; i += chunkSize) {
    const chunk = commands.slice(i, i + chunkSize)
    const commandLine = chunk.map(cmd => `\x1b[32maws ${serviceName} ${cmd}\x1b[0m`).join(' | ')
    term.writeln(`  ${commandLine}`)
  }
  
  term.writeln('')
  term.writeln('\x1b[36m💡 Example: aws ' + serviceName + ' ' + commands[0] + '\x1b[0m')
}

// Search commands by keyword
const showCommandSearch = (term, searchTerm) => {
  term.writeln(`\x1b[33m🔍 Searching for: "${searchTerm}"\x1b[0m`)
  term.writeln('')
  
  const results = searchCommands(searchTerm)
  
  if (results.length === 0) {
    term.writeln('\x1b[31m❌ No commands found matching your search\x1b[0m')
    term.writeln('\x1b[33m💡 Try different keywords or use "aws services" to browse\x1b[0m')
    return
  }
  
  results.forEach(({ service, info, commands }) => {
    term.writeln(`\x1b[1;32m${info.name} (${service.toUpperCase()}):\x1b[0m`)
    term.writeln(`\x1b[36m${info.description}\x1b[0m`)
    commands.forEach(cmd => {
      term.writeln(`  \x1b[32maws ${service} ${cmd}\x1b[0m`)
    })
    term.writeln('')
  })
  
  term.writeln(`\x1b[36m💡 Found ${results.length} service(s) with matching commands\x1b[0m`)
}

// End of file
