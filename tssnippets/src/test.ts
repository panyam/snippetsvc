import { NewClient, call } from './client'
import { CreateEnvironmentRequest, Environment } from './snippets'
// import grpc from "grpc";

const p1 = {
  name: 'tlex' as string,
  version: '*' as string,
  language: 'ts' as string
}

const env = {
  ownerId: '1',
  id: '',
  name: 'tslex',
  platform: 'node',
  dependencies: [p1]
}

const client = NewClient()

export async function runner (): Promise<void> {
  try {
    const result = await call<CreateEnvironmentRequest, Environment>(
      client,
      'createExecution',
      {
        environment: env
      }
    )
    console.log('Env: ', result)
  } catch (err) {
    console.log('Error: ', err)
  }
}

// runner()
