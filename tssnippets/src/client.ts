import { createChannel, createClient, Client } from 'nice-grpc'
import { SnippetServiceDefinition } from './snippets'

export default function NewClient (addr = 'localhost:7000'): Client<typeof SnippetServiceDefinition> {
  const channel = createChannel(addr)
  const client: Client<typeof SnippetServiceDefinition> = createClient(
    SnippetServiceDefinition,
    channel
  )
  return client
}
