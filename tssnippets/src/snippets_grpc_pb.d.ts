// package: protos
// file: snippets.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as snippets_pb from "./snippets_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface ISnippetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createEnvironment: ISnippetServiceService_ICreateEnvironment;
    getEnvironments: ISnippetServiceService_IGetEnvironments;
    listEnvironments: ISnippetServiceService_IListEnvironments;
    updateEnvironment: ISnippetServiceService_IUpdateEnvironment;
    deleteEnvironment: ISnippetServiceService_IDeleteEnvironment;
    createExecution: ISnippetServiceService_ICreateExecution;
    listExecutions: ISnippetServiceService_IListExecutions;
    deleteExecutions: ISnippetServiceService_IDeleteExecutions;
}

interface ISnippetServiceService_ICreateEnvironment extends grpc.MethodDefinition<snippets_pb.CreateEnvironmentRequest, snippets_pb.Environment> {
    path: "/protos.SnippetService/CreateEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.CreateEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.CreateEnvironmentRequest>;
    responseSerialize: grpc.serialize<snippets_pb.Environment>;
    responseDeserialize: grpc.deserialize<snippets_pb.Environment>;
}
interface ISnippetServiceService_IGetEnvironments extends grpc.MethodDefinition<snippets_pb.GetEnvironmentsRequest, snippets_pb.GetEnvironmentsResponse> {
    path: "/protos.SnippetService/GetEnvironments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.GetEnvironmentsRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.GetEnvironmentsRequest>;
    responseSerialize: grpc.serialize<snippets_pb.GetEnvironmentsResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.GetEnvironmentsResponse>;
}
interface ISnippetServiceService_IListEnvironments extends grpc.MethodDefinition<snippets_pb.ListEnvironmentsRequest, snippets_pb.ListEnvironmentsResponse> {
    path: "/protos.SnippetService/ListEnvironments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.ListEnvironmentsRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.ListEnvironmentsRequest>;
    responseSerialize: grpc.serialize<snippets_pb.ListEnvironmentsResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.ListEnvironmentsResponse>;
}
interface ISnippetServiceService_IUpdateEnvironment extends grpc.MethodDefinition<snippets_pb.UpdateEnvironmentRequest, snippets_pb.UpdateEnvironmentResponse> {
    path: "/protos.SnippetService/UpdateEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.UpdateEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.UpdateEnvironmentRequest>;
    responseSerialize: grpc.serialize<snippets_pb.UpdateEnvironmentResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.UpdateEnvironmentResponse>;
}
interface ISnippetServiceService_IDeleteEnvironment extends grpc.MethodDefinition<snippets_pb.DeleteEnvironmentRequest, snippets_pb.DeleteEnvironmentResponse> {
    path: "/protos.SnippetService/DeleteEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.DeleteEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.DeleteEnvironmentRequest>;
    responseSerialize: grpc.serialize<snippets_pb.DeleteEnvironmentResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.DeleteEnvironmentResponse>;
}
interface ISnippetServiceService_ICreateExecution extends grpc.MethodDefinition<snippets_pb.CreateExecutionRequest, snippets_pb.CreateExecutionResponse> {
    path: "/protos.SnippetService/CreateExecution";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.CreateExecutionRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.CreateExecutionRequest>;
    responseSerialize: grpc.serialize<snippets_pb.CreateExecutionResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.CreateExecutionResponse>;
}
interface ISnippetServiceService_IListExecutions extends grpc.MethodDefinition<snippets_pb.ListExecutionsRequest, snippets_pb.ListExecutionsResponse> {
    path: "/protos.SnippetService/ListExecutions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.ListExecutionsRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.ListExecutionsRequest>;
    responseSerialize: grpc.serialize<snippets_pb.ListExecutionsResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.ListExecutionsResponse>;
}
interface ISnippetServiceService_IDeleteExecutions extends grpc.MethodDefinition<snippets_pb.DeleteExecutionsRequest, snippets_pb.DeleteExecutionsResponse> {
    path: "/protos.SnippetService/DeleteExecutions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<snippets_pb.DeleteExecutionsRequest>;
    requestDeserialize: grpc.deserialize<snippets_pb.DeleteExecutionsRequest>;
    responseSerialize: grpc.serialize<snippets_pb.DeleteExecutionsResponse>;
    responseDeserialize: grpc.deserialize<snippets_pb.DeleteExecutionsResponse>;
}

export const SnippetServiceService: ISnippetServiceService;

export interface ISnippetServiceServer {
    createEnvironment: grpc.handleUnaryCall<snippets_pb.CreateEnvironmentRequest, snippets_pb.Environment>;
    getEnvironments: grpc.handleUnaryCall<snippets_pb.GetEnvironmentsRequest, snippets_pb.GetEnvironmentsResponse>;
    listEnvironments: grpc.handleUnaryCall<snippets_pb.ListEnvironmentsRequest, snippets_pb.ListEnvironmentsResponse>;
    updateEnvironment: grpc.handleUnaryCall<snippets_pb.UpdateEnvironmentRequest, snippets_pb.UpdateEnvironmentResponse>;
    deleteEnvironment: grpc.handleUnaryCall<snippets_pb.DeleteEnvironmentRequest, snippets_pb.DeleteEnvironmentResponse>;
    createExecution: grpc.handleUnaryCall<snippets_pb.CreateExecutionRequest, snippets_pb.CreateExecutionResponse>;
    listExecutions: grpc.handleUnaryCall<snippets_pb.ListExecutionsRequest, snippets_pb.ListExecutionsResponse>;
    deleteExecutions: grpc.handleUnaryCall<snippets_pb.DeleteExecutionsRequest, snippets_pb.DeleteExecutionsResponse>;
}

export interface ISnippetServiceClient {
    createEnvironment(request: snippets_pb.CreateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    createEnvironment(request: snippets_pb.CreateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    createEnvironment(request: snippets_pb.CreateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    getEnvironments(request: snippets_pb.GetEnvironmentsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    getEnvironments(request: snippets_pb.GetEnvironmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    getEnvironments(request: snippets_pb.GetEnvironmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    listEnvironments(request: snippets_pb.ListEnvironmentsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    listEnvironments(request: snippets_pb.ListEnvironmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    listEnvironments(request: snippets_pb.ListEnvironmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    createExecution(request: snippets_pb.CreateExecutionRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    createExecution(request: snippets_pb.CreateExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    createExecution(request: snippets_pb.CreateExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    listExecutions(request: snippets_pb.ListExecutionsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    listExecutions(request: snippets_pb.ListExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    listExecutions(request: snippets_pb.ListExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
    deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
    deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
}

export class SnippetServiceClient extends grpc.Client implements ISnippetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createEnvironment(request: snippets_pb.CreateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    public createEnvironment(request: snippets_pb.CreateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    public createEnvironment(request: snippets_pb.CreateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.Environment) => void): grpc.ClientUnaryCall;
    public getEnvironments(request: snippets_pb.GetEnvironmentsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public getEnvironments(request: snippets_pb.GetEnvironmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public getEnvironments(request: snippets_pb.GetEnvironmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.GetEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: snippets_pb.ListEnvironmentsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: snippets_pb.ListEnvironmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: snippets_pb.ListEnvironmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListEnvironmentsResponse) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: snippets_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.UpdateEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public deleteEnvironment(request: snippets_pb.DeleteEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteEnvironmentResponse) => void): grpc.ClientUnaryCall;
    public createExecution(request: snippets_pb.CreateExecutionRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    public createExecution(request: snippets_pb.CreateExecutionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    public createExecution(request: snippets_pb.CreateExecutionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.CreateExecutionResponse) => void): grpc.ClientUnaryCall;
    public listExecutions(request: snippets_pb.ListExecutionsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    public listExecutions(request: snippets_pb.ListExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    public listExecutions(request: snippets_pb.ListExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.ListExecutionsResponse) => void): grpc.ClientUnaryCall;
    public deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
    public deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
    public deleteExecutions(request: snippets_pb.DeleteExecutionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: snippets_pb.DeleteExecutionsResponse) => void): grpc.ClientUnaryCall;
}
