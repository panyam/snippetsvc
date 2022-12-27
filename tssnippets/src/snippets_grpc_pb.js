// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var snippets_pb = require('./snippets_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_protos_CreateEnvironmentRequest(arg) {
  if (!(arg instanceof snippets_pb.CreateEnvironmentRequest)) {
    throw new Error('Expected argument of type protos.CreateEnvironmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateEnvironmentRequest(buffer_arg) {
  return snippets_pb.CreateEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateExecutionRequest(arg) {
  if (!(arg instanceof snippets_pb.CreateExecutionRequest)) {
    throw new Error('Expected argument of type protos.CreateExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateExecutionRequest(buffer_arg) {
  return snippets_pb.CreateExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_CreateExecutionResponse(arg) {
  if (!(arg instanceof snippets_pb.CreateExecutionResponse)) {
    throw new Error('Expected argument of type protos.CreateExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateExecutionResponse(buffer_arg) {
  return snippets_pb.CreateExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteEnvironmentRequest(arg) {
  if (!(arg instanceof snippets_pb.DeleteEnvironmentRequest)) {
    throw new Error('Expected argument of type protos.DeleteEnvironmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteEnvironmentRequest(buffer_arg) {
  return snippets_pb.DeleteEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteEnvironmentResponse(arg) {
  if (!(arg instanceof snippets_pb.DeleteEnvironmentResponse)) {
    throw new Error('Expected argument of type protos.DeleteEnvironmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteEnvironmentResponse(buffer_arg) {
  return snippets_pb.DeleteEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteExecutionsRequest(arg) {
  if (!(arg instanceof snippets_pb.DeleteExecutionsRequest)) {
    throw new Error('Expected argument of type protos.DeleteExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteExecutionsRequest(buffer_arg) {
  return snippets_pb.DeleteExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_DeleteExecutionsResponse(arg) {
  if (!(arg instanceof snippets_pb.DeleteExecutionsResponse)) {
    throw new Error('Expected argument of type protos.DeleteExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_DeleteExecutionsResponse(buffer_arg) {
  return snippets_pb.DeleteExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Environment(arg) {
  if (!(arg instanceof snippets_pb.Environment)) {
    throw new Error('Expected argument of type protos.Environment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Environment(buffer_arg) {
  return snippets_pb.Environment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetEnvironmentsRequest(arg) {
  if (!(arg instanceof snippets_pb.GetEnvironmentsRequest)) {
    throw new Error('Expected argument of type protos.GetEnvironmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetEnvironmentsRequest(buffer_arg) {
  return snippets_pb.GetEnvironmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_GetEnvironmentsResponse(arg) {
  if (!(arg instanceof snippets_pb.GetEnvironmentsResponse)) {
    throw new Error('Expected argument of type protos.GetEnvironmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_GetEnvironmentsResponse(buffer_arg) {
  return snippets_pb.GetEnvironmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListEnvironmentsRequest(arg) {
  if (!(arg instanceof snippets_pb.ListEnvironmentsRequest)) {
    throw new Error('Expected argument of type protos.ListEnvironmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListEnvironmentsRequest(buffer_arg) {
  return snippets_pb.ListEnvironmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListEnvironmentsResponse(arg) {
  if (!(arg instanceof snippets_pb.ListEnvironmentsResponse)) {
    throw new Error('Expected argument of type protos.ListEnvironmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListEnvironmentsResponse(buffer_arg) {
  return snippets_pb.ListEnvironmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListExecutionsRequest(arg) {
  if (!(arg instanceof snippets_pb.ListExecutionsRequest)) {
    throw new Error('Expected argument of type protos.ListExecutionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListExecutionsRequest(buffer_arg) {
  return snippets_pb.ListExecutionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_ListExecutionsResponse(arg) {
  if (!(arg instanceof snippets_pb.ListExecutionsResponse)) {
    throw new Error('Expected argument of type protos.ListExecutionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_ListExecutionsResponse(buffer_arg) {
  return snippets_pb.ListExecutionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateEnvironmentRequest(arg) {
  if (!(arg instanceof snippets_pb.UpdateEnvironmentRequest)) {
    throw new Error('Expected argument of type protos.UpdateEnvironmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateEnvironmentRequest(buffer_arg) {
  return snippets_pb.UpdateEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_UpdateEnvironmentResponse(arg) {
  if (!(arg instanceof snippets_pb.UpdateEnvironmentResponse)) {
    throw new Error('Expected argument of type protos.UpdateEnvironmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_UpdateEnvironmentResponse(buffer_arg) {
  return snippets_pb.UpdateEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// The snippet service provides an isolated, secure, lightweight and scalable environment
// for executing snippets and returning the output of the snippets.  The use case of this is
// in embedding code samples in documentation and tutorials and ensure where a static site
// generator can submit snippets to be excuted with different versions of code and ensure
// snippets are upto date with the versions of software being documented.
var SnippetServiceService = exports.SnippetServiceService = {
  // *
// Creates a new environment for a snippet.
createEnvironment: {
    path: '/protos.SnippetService/CreateEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.CreateEnvironmentRequest,
    responseType: snippets_pb.Environment,
    requestSerialize: serialize_protos_CreateEnvironmentRequest,
    requestDeserialize: deserialize_protos_CreateEnvironmentRequest,
    responseSerialize: serialize_protos_Environment,
    responseDeserialize: deserialize_protos_Environment,
  },
  // *
// Gets information about the given environments.
getEnvironments: {
    path: '/protos.SnippetService/GetEnvironments',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.GetEnvironmentsRequest,
    responseType: snippets_pb.GetEnvironmentsResponse,
    requestSerialize: serialize_protos_GetEnvironmentsRequest,
    requestDeserialize: deserialize_protos_GetEnvironmentsRequest,
    responseSerialize: serialize_protos_GetEnvironmentsResponse,
    responseDeserialize: deserialize_protos_GetEnvironmentsResponse,
  },
  // *
// Lists all environments.
listEnvironments: {
    path: '/protos.SnippetService/ListEnvironments',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.ListEnvironmentsRequest,
    responseType: snippets_pb.ListEnvironmentsResponse,
    requestSerialize: serialize_protos_ListEnvironmentsRequest,
    requestDeserialize: deserialize_protos_ListEnvironmentsRequest,
    responseSerialize: serialize_protos_ListEnvironmentsResponse,
    responseDeserialize: deserialize_protos_ListEnvironmentsResponse,
  },
  // *
// Updates all environments.
updateEnvironment: {
    path: '/protos.SnippetService/UpdateEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.UpdateEnvironmentRequest,
    responseType: snippets_pb.UpdateEnvironmentResponse,
    requestSerialize: serialize_protos_UpdateEnvironmentRequest,
    requestDeserialize: deserialize_protos_UpdateEnvironmentRequest,
    responseSerialize: serialize_protos_UpdateEnvironmentResponse,
    responseDeserialize: deserialize_protos_UpdateEnvironmentResponse,
  },
  // *
// Cancel/Deletes environments.
deleteEnvironment: {
    path: '/protos.SnippetService/DeleteEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.DeleteEnvironmentRequest,
    responseType: snippets_pb.DeleteEnvironmentResponse,
    requestSerialize: serialize_protos_DeleteEnvironmentRequest,
    requestDeserialize: deserialize_protos_DeleteEnvironmentRequest,
    responseSerialize: serialize_protos_DeleteEnvironmentResponse,
    responseDeserialize: deserialize_protos_DeleteEnvironmentResponse,
  },
  // *
// Creates a new execution for a snippet.
createExecution: {
    path: '/protos.SnippetService/CreateExecution',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.CreateExecutionRequest,
    responseType: snippets_pb.CreateExecutionResponse,
    requestSerialize: serialize_protos_CreateExecutionRequest,
    requestDeserialize: deserialize_protos_CreateExecutionRequest,
    responseSerialize: serialize_protos_CreateExecutionResponse,
    responseDeserialize: deserialize_protos_CreateExecutionResponse,
  },
  // *
// Lists all executions.
listExecutions: {
    path: '/protos.SnippetService/ListExecutions',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.ListExecutionsRequest,
    responseType: snippets_pb.ListExecutionsResponse,
    requestSerialize: serialize_protos_ListExecutionsRequest,
    requestDeserialize: deserialize_protos_ListExecutionsRequest,
    responseSerialize: serialize_protos_ListExecutionsResponse,
    responseDeserialize: deserialize_protos_ListExecutionsResponse,
  },
  // *
// Cancel/Deletes executions.
deleteExecutions: {
    path: '/protos.SnippetService/DeleteExecutions',
    requestStream: false,
    responseStream: false,
    requestType: snippets_pb.DeleteExecutionsRequest,
    responseType: snippets_pb.DeleteExecutionsResponse,
    requestSerialize: serialize_protos_DeleteExecutionsRequest,
    requestDeserialize: deserialize_protos_DeleteExecutionsRequest,
    responseSerialize: serialize_protos_DeleteExecutionsResponse,
    responseDeserialize: deserialize_protos_DeleteExecutionsResponse,
  },
};

exports.SnippetServiceClient = grpc.makeGenericClientConstructor(SnippetServiceService);
