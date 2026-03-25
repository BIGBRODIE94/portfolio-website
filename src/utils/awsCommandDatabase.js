// Comprehensive AWS CLI Commands Database
// This file contains all available AWS CLI commands organized by service

export const AWS_SERVICES = {
  // Core Compute Services
  ec2: {
    name: 'Elastic Compute Cloud (EC2)',
    description: 'Virtual servers in the cloud',
    commands: [
      'describe-instances', 'describe-images', 'describe-security-groups',
      'describe-key-pairs', 'describe-volumes', 'describe-snapshots',
      'describe-vpcs', 'describe-subnets', 'describe-route-tables',
      'describe-internet-gateways', 'describe-nat-gateways', 'describe-load-balancers',
      'run-instances', 'terminate-instances', 'start-instances', 'stop-instances',
      'reboot-instances', 'create-security-group', 'authorize-security-group-ingress',
      'create-key-pair', 'create-volume', 'attach-volume', 'detach-volume',
      'create-snapshot', 'copy-image', 'modify-instance-attribute',
      'describe-instance-types', 'describe-regions', 'describe-availability-zones',
      'describe-account-attributes', 'describe-reserved-instances',
      'describe-spot-instance-requests', 'describe-placement-groups',
      'describe-tags', 'create-tags', 'delete-tags', 'describe-network-interfaces'
    ]
  },

  ecs: {
    name: 'Elastic Container Service (ECS)',
    description: 'Container orchestration service',
    commands: [
      'list-clusters', 'describe-clusters', 'create-cluster', 'delete-cluster',
      'list-services', 'describe-services', 'create-service', 'update-service',
      'delete-service', 'list-task-definitions', 'describe-task-definition',
      'register-task-definition', 'deregister-task-definition',
      'list-tasks', 'describe-tasks', 'stop-task', 'run-task',
      'list-container-instances', 'describe-container-instances',
      'list-capacity-providers', 'describe-capacity-providers'
    ]
  },

  eks: {
    name: 'Elastic Kubernetes Service (EKS)',
    description: 'Managed Kubernetes service',
    commands: [
      'list-clusters', 'describe-cluster', 'create-cluster', 'delete-cluster',
      'update-cluster-config', 'list-nodegroups', 'describe-nodegroup',
      'create-nodegroup', 'delete-nodegroup', 'update-nodegroup-config',
      'list-addons', 'describe-addon', 'create-addon', 'delete-addon',
      'update-addon', 'describe-update', 'list-updates'
    ]
  },

  lambda: {
    name: 'AWS Lambda',
    description: 'Serverless compute service',
    commands: [
      'list-functions', 'get-function', 'create-function', 'delete-function',
      'update-function-code', 'update-function-configuration', 'invoke',
      'list-layers', 'get-layer-version', 'publish-layer-version',
      'list-event-source-mappings', 'create-event-source-mapping',
      'delete-event-source-mapping', 'list-aliases', 'create-alias',
      'delete-alias', 'list-versions-by-function', 'publish-version',
      'delete-version', 'get-account-settings', 'list-provisioned-concurrency-configs'
    ]
  },

  // Storage Services
  s3: {
    name: 'Simple Storage Service (S3)',
    description: 'Object storage service',
    commands: [
      'ls', 'mb', 'rb', 'cp', 'mv', 'rm', 'sync', 'presign',
      'api', 'website', 'cors', 'versioning', 'multipart',
      'list-buckets', 'list-objects', 'list-objects-v2',
      'head-object', 'get-object', 'put-object', 'delete-object',
      'get-bucket-location', 'get-bucket-versioning',
      'put-bucket-versioning', 'get-bucket-cors', 'put-bucket-cors',
      'delete-bucket-cors', 'get-bucket-website', 'put-bucket-website',
      'delete-bucket-website', 'get-bucket-notification',
      'put-bucket-notification', 'get-bucket-policy', 'put-bucket-policy',
      'delete-bucket-policy', 'get-bucket-lifecycle-configuration',
      'put-bucket-lifecycle-configuration'
    ]
  },

  efs: {
    name: 'Elastic File System (EFS)',
    description: 'Managed file system service',
    commands: [
      'describe-file-systems', 'create-file-system', 'delete-file-system',
      'describe-mount-targets', 'create-mount-target', 'delete-mount-target',
      'describe-access-points', 'create-access-point', 'delete-access-point',
      'describe-lifecycle-configuration', 'put-lifecycle-configuration',
      'describe-backup-policy', 'put-backup-policy', 'list-tags-for-resource',
      'tag-resource', 'untag-resource'
    ]
  },

  // Database Services
  rds: {
    name: 'Relational Database Service (RDS)',
    description: 'Managed relational database service',
    commands: [
      'describe-db-instances', 'create-db-instance', 'delete-db-instance',
      'modify-db-instance', 'reboot-db-instance', 'start-db-instance',
      'stop-db-instance', 'describe-db-snapshots', 'create-db-snapshot',
      'delete-db-snapshot', 'restore-db-instance-from-db-snapshot',
      'describe-db-clusters', 'create-db-cluster', 'delete-db-cluster',
      'modify-db-cluster', 'describe-db-subnet-groups', 'create-db-subnet-group',
      'delete-db-subnet-group', 'describe-db-parameter-groups',
      'create-db-parameter-group', 'delete-db-parameter-group',
      'describe-db-security-groups', 'create-db-security-group',
      'delete-db-security-group', 'describe-db-engine-versions'
    ]
  },

  dynamodb: {
    name: 'DynamoDB',
    description: 'NoSQL database service',
    commands: [
      'list-tables', 'describe-table', 'create-table', 'delete-table',
      'update-table', 'put-item', 'get-item', 'delete-item',
      'query', 'scan', 'batch-get-item', 'batch-write-item',
      'describe-time-to-live', 'update-time-to-live',
      'list-global-tables', 'describe-global-table',
      'create-global-table', 'update-global-table',
      'describe-continuous-backups', 'restore-table-from-backup',
      'list-backups', 'describe-backup', 'delete-backup',
      'list-tags-of-resource', 'tag-resource', 'untag-resource'
    ]
  },

  // Networking Services
  vpc: {
    name: 'Virtual Private Cloud (VPC)',
    description: 'Isolated cloud resources',
    commands: [
      'describe-vpcs', 'create-vpc', 'delete-vpc', 'modify-vpc-attribute',
      'describe-subnets', 'create-subnet', 'delete-subnet', 'modify-subnet-attribute',
      'describe-route-tables', 'create-route-table', 'delete-route-table',
      'associate-route-table', 'disassociate-route-table', 'create-route',
      'delete-route', 'describe-internet-gateways', 'create-internet-gateway',
      'delete-internet-gateway', 'attach-internet-gateway', 'detach-internet-gateway',
      'describe-nat-gateways', 'create-nat-gateway', 'delete-nat-gateway',
      'describe-network-acls', 'create-network-acl', 'delete-network-acl',
      'describe-security-groups', 'create-security-group', 'delete-security-group',
      'authorize-security-group-ingress', 'authorize-security-group-egress',
      'revoke-security-group-ingress', 'revoke-security-group-egress'
    ]
  },

  cloudfront: {
    name: 'CloudFront',
    description: 'Content delivery network',
    commands: [
      'list-distributions', 'get-distribution', 'create-distribution',
      'update-distribution', 'delete-distribution', 'get-distribution-config',
      'list-invalidations', 'create-invalidation', 'get-invalidation',
      'list-origin-access-identities', 'create-origin-access-identity',
      'delete-origin-access-identity', 'get-origin-access-identity',
      'list-streaming-distributions', 'get-streaming-distribution',
      'create-streaming-distribution', 'update-streaming-distribution',
      'delete-streaming-distribution'
    ]
  },

  // Security & Identity Services
  iam: {
    name: 'Identity and Access Management (IAM)',
    description: 'User and access management',
    commands: [
      'list-users', 'get-user', 'create-user', 'delete-user', 'update-user',
      'list-groups', 'get-group', 'create-group', 'delete-group',
      'add-user-to-group', 'remove-user-from-group',
      'list-roles', 'get-role', 'create-role', 'delete-role', 'update-role',
      'list-policies', 'get-policy', 'create-policy', 'delete-policy',
      'attach-user-policy', 'detach-user-policy', 'attach-group-policy',
      'detach-group-policy', 'attach-role-policy', 'detach-role-policy',
      'list-access-keys', 'create-access-key', 'delete-access-key',
      'list-mfa-devices', 'create-virtual-mfa-device', 'delete-virtual-mfa-device',
      'enable-mfa-device', 'deactivate-mfa-device', 'get-account-summary'
    ]
  },

  kms: {
    name: 'Key Management Service (KMS)',
    description: 'Encryption key management',
    commands: [
      'list-keys', 'describe-key', 'create-key', 'delete-key',
      'enable-key', 'disable-key', 'schedule-key-deletion',
      'cancel-key-deletion', 'encrypt', 'decrypt', 're-encrypt',
      'generate-data-key', 'generate-data-key-without-plaintext',
      'list-aliases', 'create-alias', 'delete-alias', 'update-alias',
      'list-grants', 'create-grant', 'retire-grant', 'revoke-grant',
      'list-key-policies', 'get-key-policy', 'put-key-policy'
    ]
  },

  secretsmanager: {
    name: 'Secrets Manager',
    description: 'Secret and credential management',
    commands: [
      'list-secrets', 'describe-secret', 'get-secret-value', 'create-secret',
      'update-secret', 'delete-secret', 'restore-secret',
      'put-secret-value', 'get-random-password', 'rotate-secret',
      'cancel-rotate-secret', 'list-secret-version-ids',
      'get-secret-value-by-id', 'update-secret-version-stage'
    ]
  },

  // Monitoring & Logging Services
  cloudwatch: {
    name: 'CloudWatch',
    description: 'Monitoring and observability',
    commands: [
      'list-metrics', 'get-metric-statistics', 'put-metric-data',
      'list-dashboards', 'get-dashboard', 'put-dashboard', 'delete-dashboards',
      'list-alarms', 'describe-alarms', 'put-metric-alarm', 'delete-alarms',
      'set-alarm-state', 'disable-alarm-actions', 'enable-alarm-actions',
      'list-log-groups', 'describe-log-groups', 'create-log-group',
      'delete-log-group', 'list-log-streams', 'describe-log-streams',
      'create-log-stream', 'delete-log-stream', 'get-log-events',
      'put-log-events', 'filter-log-events', 'start-query', 'stop-query',
      'get-query-results', 'list-queries'
    ]
  },

  cloudtrail: {
    name: 'CloudTrail',
    description: 'API activity logging',
    commands: [
      'describe-trails', 'create-trail', 'update-trail', 'delete-trail',
      'start-logging', 'stop-logging', 'get-trail-status',
      'list-public-keys', 'lookup-events', 'get-event-selectors',
      'put-event-selectors', 'remove-tags', 'add-tags',
      'list-tags', 'get-trail', 'put-insight-selectors',
      'get-insight-selectors', 'list-insights'
    ]
  },

  // Application Services
  apigateway: {
    name: 'API Gateway',
    description: 'API management service',
    commands: [
      'get-rest-apis', 'create-rest-api', 'delete-rest-api',
      'get-resources', 'create-resource', 'delete-resource',
      'get-method', 'put-method', 'delete-method',
      'get-integration', 'put-integration', 'delete-integration',
      'get-deployments', 'create-deployment', 'delete-deployment',
      'get-stages', 'create-stage', 'update-stage', 'delete-stage',
      'get-usage', 'get-usage-plans', 'create-usage-plan',
      'get-api-keys', 'create-api-key', 'delete-api-key'
    ]
  },

  sqs: {
    name: 'Simple Queue Service (SQS)',
    description: 'Message queuing service',
    commands: [
      'list-queues', 'get-queue-attributes', 'create-queue', 'delete-queue',
      'send-message', 'receive-message', 'delete-message',
      'change-message-visibility', 'purge-queue', 'set-queue-attributes',
      'add-permission', 'remove-permission', 'list-dead-letter-source-queues',
      'tag-queue', 'untag-queue', 'list-queue-tags'
    ]
  },

  sns: {
    name: 'Simple Notification Service (SNS)',
    description: 'Notification service',
    commands: [
      'list-topics', 'get-topic-attributes', 'create-topic', 'delete-topic',
      'publish', 'subscribe', 'unsubscribe', 'list-subscriptions',
      'list-subscriptions-by-topic', 'set-topic-attributes',
      'add-permission', 'remove-permission', 'list-platform-applications',
      'create-platform-application', 'delete-platform-application',
      'create-platform-endpoint', 'delete-endpoint', 'get-endpoint-attributes'
    ]
  },

  // Analytics & AI Services
  athena: {
    name: 'Amazon Athena',
    description: 'Interactive query service',
    commands: [
      'list-work-groups', 'create-work-group', 'delete-work-group',
      'get-work-group', 'update-work-group', 'list-data-catalogs',
      'get-data-catalog', 'create-data-catalog', 'delete-data-catalog',
      'update-data-catalog', 'list-databases', 'get-database',
      'create-database', 'delete-database', 'list-table-metadata',
      'get-table-metadata', 'start-query-execution', 'stop-query-execution',
      'get-query-execution', 'get-query-results', 'list-query-executions'
    ]
  },

  // DevOps & Deployment Services
  codebuild: {
    name: 'AWS CodeBuild',
    description: 'Build service',
    commands: [
      'list-projects', 'describe-project', 'create-project', 'update-project',
      'delete-project', 'list-builds', 'list-builds-for-project',
      'start-build', 'stop-build', 'batch-get-builds', 'describe-build',
      'list-build-batches', 'start-build-batch', 'stop-build-batch',
      'retry-build-batch', 'describe-build-batch'
    ]
  },

  codedeploy: {
    name: 'AWS CodeDeploy',
    description: 'Deployment service',
    commands: [
      'list-applications', 'get-application', 'create-application',
      'delete-application', 'update-application', 'list-deployment-groups',
      'get-deployment-group', 'create-deployment-group', 'delete-deployment-group',
      'update-deployment-group', 'list-deployments', 'get-deployment',
      'create-deployment', 'stop-deployment', 'list-deployment-configs',
      'get-deployment-config', 'create-deployment-config'
    ]
  },

  // Management & Governance
  organizations: {
    name: 'AWS Organizations',
    description: 'Multi-account management',
    commands: [
      'describe-organization', 'create-organization', 'delete-organization',
      'list-accounts', 'describe-account', 'create-account',
      'close-account', 'list-organizational-units-for-parent',
      'create-organizational-unit', 'delete-organizational-unit',
      'describe-organizational-unit', 'list-parents', 'list-children',
      'move-account', 'list-policies', 'describe-policy', 'create-policy',
      'delete-policy', 'attach-policy', 'detach-policy'
    ]
  },

  configservice: {
    name: 'AWS Config',
    description: 'Compliance and governance',
    commands: [
      'describe-configuration-recorders', 'put-configuration-recorder',
      'delete-configuration-recorder', 'start-configuration-recorder',
      'stop-configuration-recorder', 'describe-delivery-channels',
      'put-delivery-channel', 'delete-delivery-channel',
      'describe-config-rules', 'put-config-rule', 'delete-config-rule',
      'start-config-rules-evaluation', 'describe-compliance-by-config-rule',
      'describe-compliance-by-resource', 'describe-configuration-items'
    ]
  },

  // Additional Core Services
  sts: {
    name: 'Security Token Service (STS)',
    description: 'Temporary security credentials',
    commands: [
      'get-caller-identity', 'get-session-token', 'assume-role',
      'assume-role-with-saml', 'assume-role-with-web-identity',
      'decode-authorization-message', 'get-access-key-info',
      'get-federation-token', 'get-service-last-accessed-details'
    ]
  },

  route53: {
    name: 'Amazon Route 53',
    description: 'DNS web service',
    commands: [
      'list-hosted-zones', 'get-hosted-zone', 'create-hosted-zone',
      'delete-hosted-zone', 'change-resource-record-sets',
      'list-resource-record-sets', 'get-change', 'list-tags-for-resource',
      'change-tags-for-resource', 'list-health-checks', 'get-health-check',
      'create-health-check', 'delete-health-check'
    ]
  },

  elasticache: {
    name: 'ElastiCache',
    description: 'In-memory caching service',
    commands: [
      'describe-cache-clusters', 'create-cache-cluster', 'delete-cache-cluster',
      'modify-cache-cluster', 'reboot-cache-cluster', 'describe-cache-parameter-groups',
      'create-cache-parameter-group', 'delete-cache-parameter-group',
      'describe-cache-subnet-groups', 'create-cache-subnet-group',
      'delete-cache-subnet-group', 'describe-cache-security-groups',
      'create-cache-security-group', 'delete-cache-security-group'
    ]
  },

  redshift: {
    name: 'Amazon Redshift',
    description: 'Data warehouse service',
    commands: [
      'describe-clusters', 'create-cluster', 'delete-cluster',
      'modify-cluster', 'reboot-cluster', 'describe-cluster-snapshots',
      'create-cluster-snapshot', 'delete-cluster-snapshot',
      'restore-from-cluster-snapshot', 'describe-cluster-parameter-groups',
      'create-cluster-parameter-group', 'delete-cluster-parameter-group',
      'describe-cluster-subnet-groups', 'create-cluster-subnet-group',
      'delete-cluster-subnet-group', 'describe-cluster-security-groups'
    ]
  }
}

// Command categories for better organization
export const COMMAND_CATEGORIES = {
  compute: ['ec2', 'ecs', 'eks', 'lambda'],
  storage: ['s3', 'efs'],
  database: ['rds', 'dynamodb'],
  networking: ['vpc', 'cloudfront'],
  security: ['iam', 'kms', 'secretsmanager'],
  monitoring: ['cloudwatch', 'cloudtrail'],
  applications: ['apigateway', 'sqs', 'sns'],
  analytics: ['athena'],
  devops: ['codebuild', 'codedeploy'],
  management: ['organizations', 'configservice'],
  core: ['sts', 'route53', 'elasticache', 'redshift']
}

// Helper function to get all available commands
export const getAllCommands = () => {
  const allCommands = []
  Object.entries(AWS_SERVICES).forEach(([service, info]) => {
    info.commands.forEach(command => {
      allCommands.push(`aws ${service} ${command}`)
    })
  })
  return allCommands.sort()
}

// Helper function to search commands
export const searchCommands = (query) => {
  const results = []
  const searchTerm = query.toLowerCase()
  
  Object.entries(AWS_SERVICES).forEach(([service, info]) => {
    // Check if service name or description matches
    if (info.name.toLowerCase().includes(searchTerm) || 
        info.description.toLowerCase().includes(searchTerm) ||
        service.toLowerCase().includes(searchTerm)) {
      results.push({
        service,
        info,
        commands: info.commands.filter(cmd => 
          cmd.toLowerCase().includes(searchTerm)
        )
      })
    } else {
      // Check individual commands
      const matchingCommands = info.commands.filter(cmd => 
        cmd.toLowerCase().includes(searchTerm)
      )
      if (matchingCommands.length > 0) {
        results.push({
          service,
          info,
          commands: matchingCommands
        })
      }
    }
  })
  
  return results
}

// Helper function to get service info
export const getServiceInfo = (serviceName) => {
  return AWS_SERVICES[serviceName.toLowerCase()]
}

// Helper function to get commands for a service
export const getServiceCommands = (serviceName) => {
  const service = AWS_SERVICES[serviceName.toLowerCase()]
  return service ? service.commands : []
}
