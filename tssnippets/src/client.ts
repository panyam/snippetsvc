import { credentials, Metadata } from '@grpc/grpc-js';
import { SnippetServiceClient } from './snippets';
import { promisify } from 'util';

export default function NewClient(
  addr = 'localhost:7000',
): SnippetServiceClient {
  return new SnippetServiceClient(addr, credentials.createInsecure(), {
    'grpc.keepalive_time_ms': 120000,
    'grpc.http2.min_time_between_pings_ms': 120000,
    'grpc.keepalive_timeout_ms': 20000,
    'grpc.http2.max_pings_without_data': 0,
    'grpc.keepalive_permit_without_calls': 1,
  });
}

export async function call<ReqType, RespType>(
  client: SnippetServiceClient,
  reqname: string,
  reqparam: ReqType,
  md: Metadata = new Metadata(),
): Promise<RespType> {
  const func = (client as any)[reqname].bind(client);
  return await promisify<ReqType, Metadata, RespType>(func)(reqparam, md);
}
