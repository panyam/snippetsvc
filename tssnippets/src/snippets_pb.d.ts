// package: protos
// file: snippets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class Environment extends jspb.Message { 

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Environment;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Environment;

    getOwnerId(): string;
    setOwnerId(value: string): Environment;

    getId(): string;
    setId(value: string): Environment;

    getName(): string;
    setName(value: string): Environment;

    getPlatform(): string;
    setPlatform(value: string): Environment;

    clearDependenciesList(): void;
    getDependenciesList(): Array<Package>;
    setDependenciesList(value: Array<Package>): Environment;
    addDependencies(value?: Package, index?: number): Package;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Environment.AsObject;
    static toObject(includeInstance: boolean, msg: Environment): Environment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Environment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Environment;
    static deserializeBinaryFromReader(message: Environment, reader: jspb.BinaryReader): Environment;
}

export namespace Environment {
    export type AsObject = {
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ownerId: string,
        id: string,
        name: string,
        platform: string,
        dependenciesList: Array<Package.AsObject>,
    }
}

export class Package extends jspb.Message { 

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Package;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Package;

    getName(): string;
    setName(value: string): Package;

    getVersion(): string;
    setVersion(value: string): Package;

    getLanguage(): string;
    setLanguage(value: string): Package;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Package.AsObject;
    static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Package;
    static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
    export type AsObject = {
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        version: string,
        language: string,
    }
}

export class Execution extends jspb.Message { 

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Execution;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Execution;

    getOwnerId(): string;
    setOwnerId(value: string): Execution;

    getId(): string;
    setId(value: string): Execution;

    getSnippet(): string;
    setSnippet(value: string): Execution;

    getOutputUri(): string;
    setOutputUri(value: string): Execution;

    getStatus(): string;
    setStatus(value: string): Execution;


    hasEnvId(): boolean;
    clearEnvId(): void;
    getEnvId(): string;
    setEnvId(value: string): Execution;


    hasNewEnv(): boolean;
    clearNewEnv(): void;
    getNewEnv(): Environment | undefined;
    setNewEnv(value?: Environment): Execution;


    getEnvDetailsCase(): Execution.EnvDetailsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Execution.AsObject;
    static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Execution;
    static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
    export type AsObject = {
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ownerId: string,
        id: string,
        snippet: string,
        outputUri: string,
        status: string,
        envId: string,
        newEnv?: Environment.AsObject,
    }

    export enum EnvDetailsCase {
        ENV_DETAILS_NOT_SET = 0,
    
    ENV_ID = 9,

    NEW_ENV = 10,

    }

}

export class CreateEnvironmentRequest extends jspb.Message { 

    hasEnvironment(): boolean;
    clearEnvironment(): void;
    getEnvironment(): Environment | undefined;
    setEnvironment(value?: Environment): CreateEnvironmentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEnvironmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEnvironmentRequest): CreateEnvironmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEnvironmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEnvironmentRequest;
    static deserializeBinaryFromReader(message: CreateEnvironmentRequest, reader: jspb.BinaryReader): CreateEnvironmentRequest;
}

export namespace CreateEnvironmentRequest {
    export type AsObject = {
        environment?: Environment.AsObject,
    }
}

export class GetEnvironmentsRequest extends jspb.Message { 
    clearEnvIdsList(): void;
    getEnvIdsList(): Array<string>;
    setEnvIdsList(value: Array<string>): GetEnvironmentsRequest;
    addEnvIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEnvironmentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEnvironmentsRequest): GetEnvironmentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEnvironmentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEnvironmentsRequest;
    static deserializeBinaryFromReader(message: GetEnvironmentsRequest, reader: jspb.BinaryReader): GetEnvironmentsRequest;
}

export namespace GetEnvironmentsRequest {
    export type AsObject = {
        envIdsList: Array<string>,
    }
}

export class GetEnvironmentsResponse extends jspb.Message { 

    getEnvironmentsMap(): jspb.Map<string, Environment>;
    clearEnvironmentsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEnvironmentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEnvironmentsResponse): GetEnvironmentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEnvironmentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEnvironmentsResponse;
    static deserializeBinaryFromReader(message: GetEnvironmentsResponse, reader: jspb.BinaryReader): GetEnvironmentsResponse;
}

export namespace GetEnvironmentsResponse {
    export type AsObject = {

        environmentsMap: Array<[string, Environment.AsObject]>,
    }
}

export class ListEnvironmentsRequest extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): ListEnvironmentsRequest;

    getCount(): number;
    setCount(value: number): ListEnvironmentsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEnvironmentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEnvironmentsRequest): ListEnvironmentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEnvironmentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEnvironmentsRequest;
    static deserializeBinaryFromReader(message: ListEnvironmentsRequest, reader: jspb.BinaryReader): ListEnvironmentsRequest;
}

export namespace ListEnvironmentsRequest {
    export type AsObject = {
        offset: number,
        count: number,
    }
}

export class ListEnvironmentsResponse extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<Environment>;
    setHostsList(value: Array<Environment>): ListEnvironmentsResponse;
    addHosts(value?: Environment, index?: number): Environment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEnvironmentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEnvironmentsResponse): ListEnvironmentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEnvironmentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEnvironmentsResponse;
    static deserializeBinaryFromReader(message: ListEnvironmentsResponse, reader: jspb.BinaryReader): ListEnvironmentsResponse;
}

export namespace ListEnvironmentsResponse {
    export type AsObject = {
        hostsList: Array<Environment.AsObject>,
    }
}

export class UpdateEnvironmentRequest extends jspb.Message { 

    hasEnvironment(): boolean;
    clearEnvironment(): void;
    getEnvironment(): Environment | undefined;
    setEnvironment(value?: Environment): UpdateEnvironmentRequest;


    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEnvironmentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEnvironmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEnvironmentRequest): UpdateEnvironmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEnvironmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEnvironmentRequest;
    static deserializeBinaryFromReader(message: UpdateEnvironmentRequest, reader: jspb.BinaryReader): UpdateEnvironmentRequest;
}

export namespace UpdateEnvironmentRequest {
    export type AsObject = {
        environment?: Environment.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateEnvironmentResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEnvironmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEnvironmentResponse): UpdateEnvironmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEnvironmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEnvironmentResponse;
    static deserializeBinaryFromReader(message: UpdateEnvironmentResponse, reader: jspb.BinaryReader): UpdateEnvironmentResponse;
}

export namespace UpdateEnvironmentResponse {
    export type AsObject = {
    }
}

export class DeleteEnvironmentRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteEnvironmentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEnvironmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEnvironmentRequest): DeleteEnvironmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEnvironmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEnvironmentRequest;
    static deserializeBinaryFromReader(message: DeleteEnvironmentRequest, reader: jspb.BinaryReader): DeleteEnvironmentRequest;
}

export namespace DeleteEnvironmentRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteEnvironmentResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEnvironmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEnvironmentResponse): DeleteEnvironmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEnvironmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEnvironmentResponse;
    static deserializeBinaryFromReader(message: DeleteEnvironmentResponse, reader: jspb.BinaryReader): DeleteEnvironmentResponse;
}

export namespace DeleteEnvironmentResponse {
    export type AsObject = {
    }
}

export class CreateExecutionRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateExecutionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateExecutionRequest): CreateExecutionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateExecutionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateExecutionRequest;
    static deserializeBinaryFromReader(message: CreateExecutionRequest, reader: jspb.BinaryReader): CreateExecutionRequest;
}

export namespace CreateExecutionRequest {
    export type AsObject = {
    }
}

export class CreateExecutionResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateExecutionResponse): CreateExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateExecutionResponse;
    static deserializeBinaryFromReader(message: CreateExecutionResponse, reader: jspb.BinaryReader): CreateExecutionResponse;
}

export namespace CreateExecutionResponse {
    export type AsObject = {
    }
}

export class DeleteExecutionsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteExecutionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteExecutionsRequest): DeleteExecutionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteExecutionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteExecutionsRequest;
    static deserializeBinaryFromReader(message: DeleteExecutionsRequest, reader: jspb.BinaryReader): DeleteExecutionsRequest;
}

export namespace DeleteExecutionsRequest {
    export type AsObject = {
    }
}

export class DeleteExecutionsResponse extends jspb.Message { 
    clearExecutionsList(): void;
    getExecutionsList(): Array<Execution>;
    setExecutionsList(value: Array<Execution>): DeleteExecutionsResponse;
    addExecutions(value?: Execution, index?: number): Execution;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteExecutionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteExecutionsResponse): DeleteExecutionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteExecutionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteExecutionsResponse;
    static deserializeBinaryFromReader(message: DeleteExecutionsResponse, reader: jspb.BinaryReader): DeleteExecutionsResponse;
}

export namespace DeleteExecutionsResponse {
    export type AsObject = {
        executionsList: Array<Execution.AsObject>,
    }
}

export class ListExecutionsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListExecutionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListExecutionsRequest): ListExecutionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListExecutionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListExecutionsRequest;
    static deserializeBinaryFromReader(message: ListExecutionsRequest, reader: jspb.BinaryReader): ListExecutionsRequest;
}

export namespace ListExecutionsRequest {
    export type AsObject = {
    }
}

export class ListExecutionsResponse extends jspb.Message { 
    clearExecutionsList(): void;
    getExecutionsList(): Array<Execution>;
    setExecutionsList(value: Array<Execution>): ListExecutionsResponse;
    addExecutions(value?: Execution, index?: number): Execution;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListExecutionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListExecutionsResponse): ListExecutionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListExecutionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListExecutionsResponse;
    static deserializeBinaryFromReader(message: ListExecutionsResponse, reader: jspb.BinaryReader): ListExecutionsResponse;
}

export namespace ListExecutionsResponse {
    export type AsObject = {
        executionsList: Array<Execution.AsObject>,
    }
}
