// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v5.26.1
// source: proto/user-summary.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "user";

export interface UserSummary {
  male: number;
  female: number;
  ageRange: string;
  hair: { [key: string]: number };
  addressUser: { [key: string]: string };
}

export interface UserSummary_HairEntry {
  key: string;
  value: number;
}

export interface UserSummary_AddressUserEntry {
  key: string;
  value: string;
}

export interface UserSummaryRequest {
}

export interface UserSummaryResponse {
  result: { [key: string]: UserSummary };
}

export interface UserSummaryResponse_ResultEntry {
  key: string;
  value: UserSummary | undefined;
}

function createBaseUserSummary(): UserSummary {
  return { male: 0, female: 0, ageRange: "", hair: {}, addressUser: {} };
}

export const UserSummary = {
  encode(message: UserSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.male !== 0) {
      writer.uint32(8).int32(message.male);
    }
    if (message.female !== 0) {
      writer.uint32(16).int32(message.female);
    }
    if (message.ageRange !== "") {
      writer.uint32(26).string(message.ageRange);
    }
    Object.entries(message.hair).forEach(([key, value]) => {
      UserSummary_HairEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.addressUser).forEach(([key, value]) => {
      UserSummary_AddressUserEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.male = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.female = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ageRange = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = UserSummary_HairEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.hair[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = UserSummary_AddressUserEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.addressUser[entry5.key] = entry5.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSummary {
    return {
      male: isSet(object.male) ? globalThis.Number(object.male) : 0,
      female: isSet(object.female) ? globalThis.Number(object.female) : 0,
      ageRange: isSet(object.ageRange) ? globalThis.String(object.ageRange) : "",
      hair: isObject(object.hair)
        ? Object.entries(object.hair).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      addressUser: isObject(object.addressUser)
        ? Object.entries(object.addressUser).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UserSummary): unknown {
    const obj: any = {};
    if (message.male !== 0) {
      obj.male = Math.round(message.male);
    }
    if (message.female !== 0) {
      obj.female = Math.round(message.female);
    }
    if (message.ageRange !== "") {
      obj.ageRange = message.ageRange;
    }
    if (message.hair) {
      const entries = Object.entries(message.hair);
      if (entries.length > 0) {
        obj.hair = {};
        entries.forEach(([k, v]) => {
          obj.hair[k] = Math.round(v);
        });
      }
    }
    if (message.addressUser) {
      const entries = Object.entries(message.addressUser);
      if (entries.length > 0) {
        obj.addressUser = {};
        entries.forEach(([k, v]) => {
          obj.addressUser[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummary>, I>>(base?: I): UserSummary {
    return UserSummary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummary>, I>>(object: I): UserSummary {
    const message = createBaseUserSummary();
    message.male = object.male ?? 0;
    message.female = object.female ?? 0;
    message.ageRange = object.ageRange ?? "";
    message.hair = Object.entries(object.hair ?? {}).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.addressUser = Object.entries(object.addressUser ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseUserSummary_HairEntry(): UserSummary_HairEntry {
  return { key: "", value: 0 };
}

export const UserSummary_HairEntry = {
  encode(message: UserSummary_HairEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummary_HairEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummary_HairEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSummary_HairEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: UserSummary_HairEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummary_HairEntry>, I>>(base?: I): UserSummary_HairEntry {
    return UserSummary_HairEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummary_HairEntry>, I>>(object: I): UserSummary_HairEntry {
    const message = createBaseUserSummary_HairEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseUserSummary_AddressUserEntry(): UserSummary_AddressUserEntry {
  return { key: "", value: "" };
}

export const UserSummary_AddressUserEntry = {
  encode(message: UserSummary_AddressUserEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummary_AddressUserEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummary_AddressUserEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSummary_AddressUserEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UserSummary_AddressUserEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummary_AddressUserEntry>, I>>(base?: I): UserSummary_AddressUserEntry {
    return UserSummary_AddressUserEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummary_AddressUserEntry>, I>>(object: I): UserSummary_AddressUserEntry {
    const message = createBaseUserSummary_AddressUserEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUserSummaryRequest(): UserSummaryRequest {
  return {};
}

export const UserSummaryRequest = {
  encode(_: UserSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UserSummaryRequest {
    return {};
  },

  toJSON(_: UserSummaryRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummaryRequest>, I>>(base?: I): UserSummaryRequest {
    return UserSummaryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummaryRequest>, I>>(_: I): UserSummaryRequest {
    const message = createBaseUserSummaryRequest();
    return message;
  },
};

function createBaseUserSummaryResponse(): UserSummaryResponse {
  return { result: {} };
}

export const UserSummaryResponse = {
  encode(message: UserSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.result).forEach(([key, value]) => {
      UserSummaryResponse_ResultEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = UserSummaryResponse_ResultEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.result[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSummaryResponse {
    return {
      result: isObject(object.result)
        ? Object.entries(object.result).reduce<{ [key: string]: UserSummary }>((acc, [key, value]) => {
          acc[key] = UserSummary.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UserSummaryResponse): unknown {
    const obj: any = {};
    if (message.result) {
      const entries = Object.entries(message.result);
      if (entries.length > 0) {
        obj.result = {};
        entries.forEach(([k, v]) => {
          obj.result[k] = UserSummary.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummaryResponse>, I>>(base?: I): UserSummaryResponse {
    return UserSummaryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummaryResponse>, I>>(object: I): UserSummaryResponse {
    const message = createBaseUserSummaryResponse();
    message.result = Object.entries(object.result ?? {}).reduce<{ [key: string]: UserSummary }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = UserSummary.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseUserSummaryResponse_ResultEntry(): UserSummaryResponse_ResultEntry {
  return { key: "", value: undefined };
}

export const UserSummaryResponse_ResultEntry = {
  encode(message: UserSummaryResponse_ResultEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UserSummary.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSummaryResponse_ResultEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSummaryResponse_ResultEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = UserSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSummaryResponse_ResultEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? UserSummary.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UserSummaryResponse_ResultEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = UserSummary.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSummaryResponse_ResultEntry>, I>>(base?: I): UserSummaryResponse_ResultEntry {
    return UserSummaryResponse_ResultEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSummaryResponse_ResultEntry>, I>>(
    object: I,
  ): UserSummaryResponse_ResultEntry {
    const message = createBaseUserSummaryResponse_ResultEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? UserSummary.fromPartial(object.value)
      : undefined;
    return message;
  },
};

export type UserService = typeof UserService;
export const UserService = {
  userSummary: {
    path: "/user.User/UserSummary",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UserSummaryRequest) => Buffer.from(UserSummaryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UserSummaryRequest.decode(value),
    responseSerialize: (value: UserSummaryResponse) => Buffer.from(UserSummaryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserSummaryResponse.decode(value),
  },
} as const;

export interface UserServer extends UntypedServiceImplementation {
  userSummary: handleUnaryCall<UserSummaryRequest, UserSummaryResponse>;
}

export interface UserClient extends Client {
  userSummary(
    request: UserSummaryRequest,
    callback: (error: ServiceError | null, response: UserSummaryResponse) => void,
  ): ClientUnaryCall;
  userSummary(
    request: UserSummaryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UserSummaryResponse) => void,
  ): ClientUnaryCall;
  userSummary(
    request: UserSummaryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UserSummaryResponse) => void,
  ): ClientUnaryCall;
}

export const UserClient = makeGenericClientConstructor(UserService, "user.User") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserClient;
  service: typeof UserService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
