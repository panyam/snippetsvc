import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';

export default function NewClient(
  addr = 'localhost:7000',
): Client<typeof SnippetServiceDefinition> {
  const client = new GreeterClient(
    'localhost:50051',
    credentials.createInsecure(),
    {
      'grpc.keepalive_time_ms': 120000,
      'grpc.http2.min_time_between_pings_ms': 120000,
      'grpc.keepalive_timeout_ms': 20000,
      'grpc.http2.max_pings_without_data': 0,
      'grpc.keepalive_permit_without_calls': 1,
    },
  );
  return client;
}
