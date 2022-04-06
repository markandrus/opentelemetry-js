// package: opentelemetry.proto.metrics.experimental
// file: opentelemetry/proto/metrics/experimental/configservice.proto

import * as jspb from "google-protobuf";
import * as opentelemetry_proto_resource_v1_resource_pb from "../../../../opentelemetry/proto/resource/v1/resource_pb";

export class MetricConfigRequest extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): opentelemetry_proto_resource_v1_resource_pb.Resource | undefined;
  setResource(value?: opentelemetry_proto_resource_v1_resource_pb.Resource): void;

  getLastKnownFingerprint(): Uint8Array | string;
  getLastKnownFingerprint_asU8(): Uint8Array;
  getLastKnownFingerprint_asB64(): string;
  setLastKnownFingerprint(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetricConfigRequest): MetricConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetricConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricConfigRequest;
  static deserializeBinaryFromReader(message: MetricConfigRequest, reader: jspb.BinaryReader): MetricConfigRequest;
}

export namespace MetricConfigRequest {
  export type AsObject = {
    resource?: opentelemetry_proto_resource_v1_resource_pb.Resource.AsObject,
    lastKnownFingerprint: Uint8Array | string,
  }
}

export class MetricConfigResponse extends jspb.Message {
  getFingerprint(): Uint8Array | string;
  getFingerprint_asU8(): Uint8Array;
  getFingerprint_asB64(): string;
  setFingerprint(value: Uint8Array | string): void;

  clearSchedulesList(): void;
  getSchedulesList(): Array<MetricConfigResponse.Schedule>;
  setSchedulesList(value: Array<MetricConfigResponse.Schedule>): void;
  addSchedules(value?: MetricConfigResponse.Schedule, index?: number): MetricConfigResponse.Schedule;

  getSuggestedWaitTimeSec(): number;
  setSuggestedWaitTimeSec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetricConfigResponse): MetricConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetricConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricConfigResponse;
  static deserializeBinaryFromReader(message: MetricConfigResponse, reader: jspb.BinaryReader): MetricConfigResponse;
}

export namespace MetricConfigResponse {
  export type AsObject = {
    fingerprint: Uint8Array | string,
    schedulesList: Array<MetricConfigResponse.Schedule.AsObject>,
    suggestedWaitTimeSec: number,
  }

  export class Schedule extends jspb.Message {
    clearExclusionPatternsList(): void;
    getExclusionPatternsList(): Array<MetricConfigResponse.Schedule.Pattern>;
    setExclusionPatternsList(value: Array<MetricConfigResponse.Schedule.Pattern>): void;
    addExclusionPatterns(value?: MetricConfigResponse.Schedule.Pattern, index?: number): MetricConfigResponse.Schedule.Pattern;

    clearInclusionPatternsList(): void;
    getInclusionPatternsList(): Array<MetricConfigResponse.Schedule.Pattern>;
    setInclusionPatternsList(value: Array<MetricConfigResponse.Schedule.Pattern>): void;
    addInclusionPatterns(value?: MetricConfigResponse.Schedule.Pattern, index?: number): MetricConfigResponse.Schedule.Pattern;

    getPeriodSec(): number;
    setPeriodSec(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schedule.AsObject;
    static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schedule;
    static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
  }

  export namespace Schedule {
    export type AsObject = {
      exclusionPatternsList: Array<MetricConfigResponse.Schedule.Pattern.AsObject>,
      inclusionPatternsList: Array<MetricConfigResponse.Schedule.Pattern.AsObject>,
      periodSec: number,
    }

    export class Pattern extends jspb.Message {
      hasEquals(): boolean;
      clearEquals(): void;
      getEquals(): string;
      setEquals(value: string): void;

      hasStartsWith(): boolean;
      clearStartsWith(): void;
      getStartsWith(): string;
      setStartsWith(value: string): void;

      getMatchCase(): Pattern.MatchCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Pattern.AsObject;
      static toObject(includeInstance: boolean, msg: Pattern): Pattern.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Pattern, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Pattern;
      static deserializeBinaryFromReader(message: Pattern, reader: jspb.BinaryReader): Pattern;
    }

    export namespace Pattern {
      export type AsObject = {
        equals: string,
        startsWith: string,
      }

      export enum MatchCase {
        MATCH_NOT_SET = 0,
        EQUALS = 1,
        STARTS_WITH = 2,
      }
    }
  }
}

