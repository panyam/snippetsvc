/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FieldMask } from "./google/protobuf/field_mask";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "protos";

export interface Environment {
  created_at: Date | undefined;
  updated_at: Date | undefined;
  owner_id: string;
  id: string;
  /** name of the environment. */
  name: string;
  /**
   * The platform how the environment is created/managed etc.
   * eg Node
   */
  platform: string;
  dependencies: Package[];
}

export interface Package {
  created_at: Date | undefined;
  updated_at: Date | undefined;
  name: string;
  version: string;
  language: string;
}

export interface Execution {
  created_at: Date | undefined;
  updated_at:
    | Date
    | undefined;
  /** An execution can run in a pre-defined environment. */
  env_id: string;
  owner_id: string;
  id: string;
  /** Code snippet being run */
  snippet: string;
  /** Output result of this execution */
  output: string;
  /** Status of the execution */
  status: string;
}

export interface EnsureEnvironmentRequest {
  environment: Environment | undefined;
}

export interface ListEnvironmentsRequest {
  offset?: number | undefined;
  count?: number | undefined;
}

export interface ListEnvironmentsResponse {
  hosts: Environment[];
}

export interface UpdateEnvironmentRequest {
  environment: Environment | undefined;
  update_mask: string[] | undefined;
}

export interface UpdateEnvironmentResponse {
}

export interface DeleteEnvironmentRequest {
  id: string;
}

export interface DeleteEnvironmentResponse {
}

export interface CreateExecutionRequest {
}

export interface CreateExecutionResponse {
}

export interface DeleteExecutionsRequest {
}

export interface DeleteExecutionsResponse {
  executions: Execution[];
}

export interface ListExecutionsRequest {
}

export interface ListExecutionsResponse {
  executions: Execution[];
}

function createBaseEnvironment(): Environment {
  return {
    created_at: undefined,
    updated_at: undefined,
    owner_id: "",
    id: "",
    name: "",
    platform: "",
    dependencies: [],
  };
}

export const Environment = {
  encode(message: Environment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(10).fork()).ldelim();
    }
    if (message.updated_at !== undefined) {
      Timestamp.encode(toTimestamp(message.updated_at), writer.uint32(18).fork()).ldelim();
    }
    if (message.owner_id !== "") {
      writer.uint32(26).string(message.owner_id);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.platform !== "") {
      writer.uint32(58).string(message.platform);
    }
    for (const v of message.dependencies) {
      Package.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updated_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.owner_id = reader.string();
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 7:
          message.platform = reader.string();
          break;
        case 6:
          message.dependencies.push(Package.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Environment {
    return {
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
      updated_at: isSet(object.updated_at) ? fromJsonTimestamp(object.updated_at) : undefined,
      owner_id: isSet(object.owner_id) ? String(object.owner_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => Package.fromJSON(e)) : [],
    };
  },

  toJSON(message: Environment): unknown {
    const obj: any = {};
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    message.updated_at !== undefined && (obj.updated_at = message.updated_at.toISOString());
    message.owner_id !== undefined && (obj.owner_id = message.owner_id);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.platform !== undefined && (obj.platform = message.platform);
    if (message.dependencies) {
      obj.dependencies = message.dependencies.map((e) => e ? Package.toJSON(e) : undefined);
    } else {
      obj.dependencies = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Environment>, I>>(object: I): Environment {
    const message = createBaseEnvironment();
    message.created_at = object.created_at ?? undefined;
    message.updated_at = object.updated_at ?? undefined;
    message.owner_id = object.owner_id ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.platform = object.platform ?? "";
    message.dependencies = object.dependencies?.map((e) => Package.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackage(): Package {
  return { created_at: undefined, updated_at: undefined, name: "", version: "", language: "" };
}

export const Package = {
  encode(message: Package, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(10).fork()).ldelim();
    }
    if (message.updated_at !== undefined) {
      Timestamp.encode(toTimestamp(message.updated_at), writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.language !== "") {
      writer.uint32(42).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updated_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
      updated_at: isSet(object.updated_at) ? fromJsonTimestamp(object.updated_at) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    message.updated_at !== undefined && (obj.updated_at = message.updated_at.toISOString());
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = createBasePackage();
    message.created_at = object.created_at ?? undefined;
    message.updated_at = object.updated_at ?? undefined;
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseExecution(): Execution {
  return {
    created_at: undefined,
    updated_at: undefined,
    env_id: "",
    owner_id: "",
    id: "",
    snippet: "",
    output: "",
    status: "",
  };
}

export const Execution = {
  encode(message: Execution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(10).fork()).ldelim();
    }
    if (message.updated_at !== undefined) {
      Timestamp.encode(toTimestamp(message.updated_at), writer.uint32(18).fork()).ldelim();
    }
    if (message.env_id !== "") {
      writer.uint32(26).string(message.env_id);
    }
    if (message.owner_id !== "") {
      writer.uint32(34).string(message.owner_id);
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    if (message.snippet !== "") {
      writer.uint32(50).string(message.snippet);
    }
    if (message.output !== "") {
      writer.uint32(58).string(message.output);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Execution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updated_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.env_id = reader.string();
          break;
        case 4:
          message.owner_id = reader.string();
          break;
        case 5:
          message.id = reader.string();
          break;
        case 6:
          message.snippet = reader.string();
          break;
        case 7:
          message.output = reader.string();
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Execution {
    return {
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
      updated_at: isSet(object.updated_at) ? fromJsonTimestamp(object.updated_at) : undefined,
      env_id: isSet(object.env_id) ? String(object.env_id) : "",
      owner_id: isSet(object.owner_id) ? String(object.owner_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      snippet: isSet(object.snippet) ? String(object.snippet) : "",
      output: isSet(object.output) ? String(object.output) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: Execution): unknown {
    const obj: any = {};
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    message.updated_at !== undefined && (obj.updated_at = message.updated_at.toISOString());
    message.env_id !== undefined && (obj.env_id = message.env_id);
    message.owner_id !== undefined && (obj.owner_id = message.owner_id);
    message.id !== undefined && (obj.id = message.id);
    message.snippet !== undefined && (obj.snippet = message.snippet);
    message.output !== undefined && (obj.output = message.output);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Execution>, I>>(object: I): Execution {
    const message = createBaseExecution();
    message.created_at = object.created_at ?? undefined;
    message.updated_at = object.updated_at ?? undefined;
    message.env_id = object.env_id ?? "";
    message.owner_id = object.owner_id ?? "";
    message.id = object.id ?? "";
    message.snippet = object.snippet ?? "";
    message.output = object.output ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseEnsureEnvironmentRequest(): EnsureEnvironmentRequest {
  return { environment: undefined };
}

export const EnsureEnvironmentRequest = {
  encode(message: EnsureEnvironmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== undefined) {
      Environment.encode(message.environment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnsureEnvironmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnsureEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environment = Environment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnsureEnvironmentRequest {
    return { environment: isSet(object.environment) ? Environment.fromJSON(object.environment) : undefined };
  },

  toJSON(message: EnsureEnvironmentRequest): unknown {
    const obj: any = {};
    message.environment !== undefined &&
      (obj.environment = message.environment ? Environment.toJSON(message.environment) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnsureEnvironmentRequest>, I>>(object: I): EnsureEnvironmentRequest {
    const message = createBaseEnsureEnvironmentRequest();
    message.environment = (object.environment !== undefined && object.environment !== null)
      ? Environment.fromPartial(object.environment)
      : undefined;
    return message;
  },
};

function createBaseListEnvironmentsRequest(): ListEnvironmentsRequest {
  return { offset: undefined, count: undefined };
}

export const ListEnvironmentsRequest = {
  encode(message: ListEnvironmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== undefined) {
      writer.uint32(8).int32(message.offset);
    }
    if (message.count !== undefined) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEnvironmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEnvironmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.int32();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListEnvironmentsRequest {
    return {
      offset: isSet(object.offset) ? Number(object.offset) : undefined,
      count: isSet(object.count) ? Number(object.count) : undefined,
    };
  },

  toJSON(message: ListEnvironmentsRequest): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListEnvironmentsRequest>, I>>(object: I): ListEnvironmentsRequest {
    const message = createBaseListEnvironmentsRequest();
    message.offset = object.offset ?? undefined;
    message.count = object.count ?? undefined;
    return message;
  },
};

function createBaseListEnvironmentsResponse(): ListEnvironmentsResponse {
  return { hosts: [] };
}

export const ListEnvironmentsResponse = {
  encode(message: ListEnvironmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      Environment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEnvironmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEnvironmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hosts.push(Environment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListEnvironmentsResponse {
    return { hosts: Array.isArray(object?.hosts) ? object.hosts.map((e: any) => Environment.fromJSON(e)) : [] };
  },

  toJSON(message: ListEnvironmentsResponse): unknown {
    const obj: any = {};
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e ? Environment.toJSON(e) : undefined);
    } else {
      obj.hosts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListEnvironmentsResponse>, I>>(object: I): ListEnvironmentsResponse {
    const message = createBaseListEnvironmentsResponse();
    message.hosts = object.hosts?.map((e) => Environment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateEnvironmentRequest(): UpdateEnvironmentRequest {
  return { environment: undefined, update_mask: undefined };
}

export const UpdateEnvironmentRequest = {
  encode(message: UpdateEnvironmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== undefined) {
      Environment.encode(message.environment, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_mask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.update_mask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnvironmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environment = Environment.decode(reader, reader.uint32());
          break;
        case 2:
          message.update_mask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEnvironmentRequest {
    return {
      environment: isSet(object.environment) ? Environment.fromJSON(object.environment) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.unwrap(FieldMask.fromJSON(object.update_mask)) : undefined,
    };
  },

  toJSON(message: UpdateEnvironmentRequest): unknown {
    const obj: any = {};
    message.environment !== undefined &&
      (obj.environment = message.environment ? Environment.toJSON(message.environment) : undefined);
    message.update_mask !== undefined && (obj.update_mask = FieldMask.toJSON(FieldMask.wrap(message.update_mask)));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEnvironmentRequest>, I>>(object: I): UpdateEnvironmentRequest {
    const message = createBaseUpdateEnvironmentRequest();
    message.environment = (object.environment !== undefined && object.environment !== null)
      ? Environment.fromPartial(object.environment)
      : undefined;
    message.update_mask = object.update_mask ?? undefined;
    return message;
  },
};

function createBaseUpdateEnvironmentResponse(): UpdateEnvironmentResponse {
  return {};
}

export const UpdateEnvironmentResponse = {
  encode(_: UpdateEnvironmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnvironmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateEnvironmentResponse {
    return {};
  },

  toJSON(_: UpdateEnvironmentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEnvironmentResponse>, I>>(_: I): UpdateEnvironmentResponse {
    const message = createBaseUpdateEnvironmentResponse();
    return message;
  },
};

function createBaseDeleteEnvironmentRequest(): DeleteEnvironmentRequest {
  return { id: "" };
}

export const DeleteEnvironmentRequest = {
  encode(message: DeleteEnvironmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEnvironmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEnvironmentRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteEnvironmentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEnvironmentRequest>, I>>(object: I): DeleteEnvironmentRequest {
    const message = createBaseDeleteEnvironmentRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteEnvironmentResponse(): DeleteEnvironmentResponse {
  return {};
}

export const DeleteEnvironmentResponse = {
  encode(_: DeleteEnvironmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEnvironmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteEnvironmentResponse {
    return {};
  },

  toJSON(_: DeleteEnvironmentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteEnvironmentResponse>, I>>(_: I): DeleteEnvironmentResponse {
    const message = createBaseDeleteEnvironmentResponse();
    return message;
  },
};

function createBaseCreateExecutionRequest(): CreateExecutionRequest {
  return {};
}

export const CreateExecutionRequest = {
  encode(_: CreateExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExecutionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateExecutionRequest {
    return {};
  },

  toJSON(_: CreateExecutionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExecutionRequest>, I>>(_: I): CreateExecutionRequest {
    const message = createBaseCreateExecutionRequest();
    return message;
  },
};

function createBaseCreateExecutionResponse(): CreateExecutionResponse {
  return {};
}

export const CreateExecutionResponse = {
  encode(_: CreateExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateExecutionResponse {
    return {};
  },

  toJSON(_: CreateExecutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExecutionResponse>, I>>(_: I): CreateExecutionResponse {
    const message = createBaseCreateExecutionResponse();
    return message;
  },
};

function createBaseDeleteExecutionsRequest(): DeleteExecutionsRequest {
  return {};
}

export const DeleteExecutionsRequest = {
  encode(_: DeleteExecutionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExecutionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExecutionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteExecutionsRequest {
    return {};
  },

  toJSON(_: DeleteExecutionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExecutionsRequest>, I>>(_: I): DeleteExecutionsRequest {
    const message = createBaseDeleteExecutionsRequest();
    return message;
  },
};

function createBaseDeleteExecutionsResponse(): DeleteExecutionsResponse {
  return { executions: [] };
}

export const DeleteExecutionsResponse = {
  encode(message: DeleteExecutionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExecutionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExecutionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executions.push(Execution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExecutionsResponse {
    return {
      executions: Array.isArray(object?.executions) ? object.executions.map((e: any) => Execution.fromJSON(e)) : [],
    };
  },

  toJSON(message: DeleteExecutionsResponse): unknown {
    const obj: any = {};
    if (message.executions) {
      obj.executions = message.executions.map((e) => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.executions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExecutionsResponse>, I>>(object: I): DeleteExecutionsResponse {
    const message = createBaseDeleteExecutionsResponse();
    message.executions = object.executions?.map((e) => Execution.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListExecutionsRequest(): ListExecutionsRequest {
  return {};
}

export const ListExecutionsRequest = {
  encode(_: ListExecutionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExecutionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExecutionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListExecutionsRequest {
    return {};
  },

  toJSON(_: ListExecutionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExecutionsRequest>, I>>(_: I): ListExecutionsRequest {
    const message = createBaseListExecutionsRequest();
    return message;
  },
};

function createBaseListExecutionsResponse(): ListExecutionsResponse {
  return { executions: [] };
}

export const ListExecutionsResponse = {
  encode(message: ListExecutionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExecutionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExecutionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executions.push(Execution.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListExecutionsResponse {
    return {
      executions: Array.isArray(object?.executions) ? object.executions.map((e: any) => Execution.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListExecutionsResponse): unknown {
    const obj: any = {};
    if (message.executions) {
      obj.executions = message.executions.map((e) => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.executions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExecutionsResponse>, I>>(object: I): ListExecutionsResponse {
    const message = createBaseListExecutionsResponse();
    message.executions = object.executions?.map((e) => Execution.fromPartial(e)) || [];
    return message;
  },
};

/**
 * The snippet service provides an isolated, secure, lightweight and scalable environment
 * for executing snippets and returning the output of the snippets.  The use case of this is
 * in embedding code samples in documentation and tutorials and ensure where a static site
 * generator can submit snippets to be excuted with different versions of code and ensure
 * snippets are upto date with the versions of software being documented.
 */
export type SnippetServiceDefinition = typeof SnippetServiceDefinition;
export const SnippetServiceDefinition = {
  name: "SnippetService",
  fullName: "protos.SnippetService",
  methods: {
    /** Creates a new environment for a snippet. */
    ensureEnvironment: {
      name: "EnsureEnvironment",
      requestType: EnsureEnvironmentRequest,
      requestStream: false,
      responseType: Environment,
      responseStream: false,
      options: {},
    },
    /** Lists all environments. */
    listEnvironments: {
      name: "ListEnvironments",
      requestType: ListEnvironmentsRequest,
      requestStream: false,
      responseType: ListEnvironmentsResponse,
      responseStream: false,
      options: {},
    },
    /** Updates all environments. */
    updateEnvironment: {
      name: "UpdateEnvironment",
      requestType: UpdateEnvironmentRequest,
      requestStream: false,
      responseType: UpdateEnvironmentResponse,
      responseStream: false,
      options: {},
    },
    /** Cancel/Deletes environments. */
    deleteEnvironment: {
      name: "DeleteEnvironment",
      requestType: DeleteEnvironmentRequest,
      requestStream: false,
      responseType: DeleteEnvironmentResponse,
      responseStream: false,
      options: {},
    },
    /** Creates a new execution for a snippet. */
    createExecution: {
      name: "CreateExecution",
      requestType: CreateExecutionRequest,
      requestStream: false,
      responseType: CreateExecutionResponse,
      responseStream: false,
      options: {},
    },
    /** Lists all executions. */
    listExecutions: {
      name: "ListExecutions",
      requestType: ListExecutionsRequest,
      requestStream: false,
      responseType: ListExecutionsResponse,
      responseStream: false,
      options: {},
    },
    /** Cancel/Deletes executions. */
    deleteExecutions: {
      name: "DeleteExecutions",
      requestType: DeleteExecutionsRequest,
      requestStream: false,
      responseType: DeleteExecutionsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
