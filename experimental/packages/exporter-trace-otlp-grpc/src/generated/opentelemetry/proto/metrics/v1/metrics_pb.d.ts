// package: opentelemetry.proto.metrics.v1
// file: opentelemetry/proto/metrics/v1/metrics.proto

import * as jspb from "google-protobuf";
import * as opentelemetry_proto_common_v1_common_pb from "../../../../opentelemetry/proto/common/v1/common_pb";
import * as opentelemetry_proto_resource_v1_resource_pb from "../../../../opentelemetry/proto/resource/v1/resource_pb";

export class ResourceMetrics extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): opentelemetry_proto_resource_v1_resource_pb.Resource | undefined;
  setResource(value?: opentelemetry_proto_resource_v1_resource_pb.Resource): void;

  clearInstrumentationLibraryMetricsList(): void;
  getInstrumentationLibraryMetricsList(): Array<InstrumentationLibraryMetrics>;
  setInstrumentationLibraryMetricsList(value: Array<InstrumentationLibraryMetrics>): void;
  addInstrumentationLibraryMetrics(value?: InstrumentationLibraryMetrics, index?: number): InstrumentationLibraryMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceMetrics): ResourceMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceMetrics;
  static deserializeBinaryFromReader(message: ResourceMetrics, reader: jspb.BinaryReader): ResourceMetrics;
}

export namespace ResourceMetrics {
  export type AsObject = {
    resource?: opentelemetry_proto_resource_v1_resource_pb.Resource.AsObject,
    instrumentationLibraryMetricsList: Array<InstrumentationLibraryMetrics.AsObject>,
  }
}

export class InstrumentationLibraryMetrics extends jspb.Message {
  hasInstrumentationLibrary(): boolean;
  clearInstrumentationLibrary(): void;
  getInstrumentationLibrary(): opentelemetry_proto_common_v1_common_pb.InstrumentationLibrary | undefined;
  setInstrumentationLibrary(value?: opentelemetry_proto_common_v1_common_pb.InstrumentationLibrary): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentationLibraryMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentationLibraryMetrics): InstrumentationLibraryMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentationLibraryMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentationLibraryMetrics;
  static deserializeBinaryFromReader(message: InstrumentationLibraryMetrics, reader: jspb.BinaryReader): InstrumentationLibraryMetrics;
}

export namespace InstrumentationLibraryMetrics {
  export type AsObject = {
    instrumentationLibrary?: opentelemetry_proto_common_v1_common_pb.InstrumentationLibrary.AsObject,
    metricsList: Array<Metric.AsObject>,
  }
}

export class Metric extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUnit(): string;
  setUnit(value: string): void;

  hasIntGauge(): boolean;
  clearIntGauge(): void;
  getIntGauge(): IntGauge | undefined;
  setIntGauge(value?: IntGauge): void;

  hasDoubleGauge(): boolean;
  clearDoubleGauge(): void;
  getDoubleGauge(): DoubleGauge | undefined;
  setDoubleGauge(value?: DoubleGauge): void;

  hasIntSum(): boolean;
  clearIntSum(): void;
  getIntSum(): IntSum | undefined;
  setIntSum(value?: IntSum): void;

  hasDoubleSum(): boolean;
  clearDoubleSum(): void;
  getDoubleSum(): DoubleSum | undefined;
  setDoubleSum(value?: DoubleSum): void;

  hasIntHistogram(): boolean;
  clearIntHistogram(): void;
  getIntHistogram(): IntHistogram | undefined;
  setIntHistogram(value?: IntHistogram): void;

  hasDoubleHistogram(): boolean;
  clearDoubleHistogram(): void;
  getDoubleHistogram(): DoubleHistogram | undefined;
  setDoubleHistogram(value?: DoubleHistogram): void;

  getDataCase(): Metric.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metric.AsObject;
  static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metric;
  static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

export namespace Metric {
  export type AsObject = {
    name: string,
    description: string,
    unit: string,
    intGauge?: IntGauge.AsObject,
    doubleGauge?: DoubleGauge.AsObject,
    intSum?: IntSum.AsObject,
    doubleSum?: DoubleSum.AsObject,
    intHistogram?: IntHistogram.AsObject,
    doubleHistogram?: DoubleHistogram.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    INT_GAUGE = 4,
    DOUBLE_GAUGE = 5,
    INT_SUM = 6,
    DOUBLE_SUM = 7,
    INT_HISTOGRAM = 8,
    DOUBLE_HISTOGRAM = 9,
  }
}

export class IntGauge extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<IntDataPoint>;
  setDataPointsList(value: Array<IntDataPoint>): void;
  addDataPoints(value?: IntDataPoint, index?: number): IntDataPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntGauge.AsObject;
  static toObject(includeInstance: boolean, msg: IntGauge): IntGauge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntGauge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntGauge;
  static deserializeBinaryFromReader(message: IntGauge, reader: jspb.BinaryReader): IntGauge;
}

export namespace IntGauge {
  export type AsObject = {
    dataPointsList: Array<IntDataPoint.AsObject>,
  }
}

export class DoubleGauge extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<DoubleDataPoint>;
  setDataPointsList(value: Array<DoubleDataPoint>): void;
  addDataPoints(value?: DoubleDataPoint, index?: number): DoubleDataPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleGauge.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleGauge): DoubleGauge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleGauge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleGauge;
  static deserializeBinaryFromReader(message: DoubleGauge, reader: jspb.BinaryReader): DoubleGauge;
}

export namespace DoubleGauge {
  export type AsObject = {
    dataPointsList: Array<DoubleDataPoint.AsObject>,
  }
}

export class IntSum extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<IntDataPoint>;
  setDataPointsList(value: Array<IntDataPoint>): void;
  addDataPoints(value?: IntDataPoint, index?: number): IntDataPoint;

  getAggregationTemporality(): AggregationTemporalityMap[keyof AggregationTemporalityMap];
  setAggregationTemporality(value: AggregationTemporalityMap[keyof AggregationTemporalityMap]): void;

  getIsMonotonic(): boolean;
  setIsMonotonic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntSum.AsObject;
  static toObject(includeInstance: boolean, msg: IntSum): IntSum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntSum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntSum;
  static deserializeBinaryFromReader(message: IntSum, reader: jspb.BinaryReader): IntSum;
}

export namespace IntSum {
  export type AsObject = {
    dataPointsList: Array<IntDataPoint.AsObject>,
    aggregationTemporality: AggregationTemporalityMap[keyof AggregationTemporalityMap],
    isMonotonic: boolean,
  }
}

export class DoubleSum extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<DoubleDataPoint>;
  setDataPointsList(value: Array<DoubleDataPoint>): void;
  addDataPoints(value?: DoubleDataPoint, index?: number): DoubleDataPoint;

  getAggregationTemporality(): AggregationTemporalityMap[keyof AggregationTemporalityMap];
  setAggregationTemporality(value: AggregationTemporalityMap[keyof AggregationTemporalityMap]): void;

  getIsMonotonic(): boolean;
  setIsMonotonic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleSum.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleSum): DoubleSum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleSum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleSum;
  static deserializeBinaryFromReader(message: DoubleSum, reader: jspb.BinaryReader): DoubleSum;
}

export namespace DoubleSum {
  export type AsObject = {
    dataPointsList: Array<DoubleDataPoint.AsObject>,
    aggregationTemporality: AggregationTemporalityMap[keyof AggregationTemporalityMap],
    isMonotonic: boolean,
  }
}

export class IntHistogram extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<IntHistogramDataPoint>;
  setDataPointsList(value: Array<IntHistogramDataPoint>): void;
  addDataPoints(value?: IntHistogramDataPoint, index?: number): IntHistogramDataPoint;

  getAggregationTemporality(): AggregationTemporalityMap[keyof AggregationTemporalityMap];
  setAggregationTemporality(value: AggregationTemporalityMap[keyof AggregationTemporalityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntHistogram.AsObject;
  static toObject(includeInstance: boolean, msg: IntHistogram): IntHistogram.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntHistogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntHistogram;
  static deserializeBinaryFromReader(message: IntHistogram, reader: jspb.BinaryReader): IntHistogram;
}

export namespace IntHistogram {
  export type AsObject = {
    dataPointsList: Array<IntHistogramDataPoint.AsObject>,
    aggregationTemporality: AggregationTemporalityMap[keyof AggregationTemporalityMap],
  }
}

export class DoubleHistogram extends jspb.Message {
  clearDataPointsList(): void;
  getDataPointsList(): Array<DoubleHistogramDataPoint>;
  setDataPointsList(value: Array<DoubleHistogramDataPoint>): void;
  addDataPoints(value?: DoubleHistogramDataPoint, index?: number): DoubleHistogramDataPoint;

  getAggregationTemporality(): AggregationTemporalityMap[keyof AggregationTemporalityMap];
  setAggregationTemporality(value: AggregationTemporalityMap[keyof AggregationTemporalityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleHistogram.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleHistogram): DoubleHistogram.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleHistogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleHistogram;
  static deserializeBinaryFromReader(message: DoubleHistogram, reader: jspb.BinaryReader): DoubleHistogram;
}

export namespace DoubleHistogram {
  export type AsObject = {
    dataPointsList: Array<DoubleHistogramDataPoint.AsObject>,
    aggregationTemporality: AggregationTemporalityMap[keyof AggregationTemporalityMap],
  }
}

export class IntDataPoint extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getStartTimeUnixNano(): number;
  setStartTimeUnixNano(value: number): void;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  clearExemplarsList(): void;
  getExemplarsList(): Array<IntExemplar>;
  setExemplarsList(value: Array<IntExemplar>): void;
  addExemplars(value?: IntExemplar, index?: number): IntExemplar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntDataPoint.AsObject;
  static toObject(includeInstance: boolean, msg: IntDataPoint): IntDataPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntDataPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntDataPoint;
  static deserializeBinaryFromReader(message: IntDataPoint, reader: jspb.BinaryReader): IntDataPoint;
}

export namespace IntDataPoint {
  export type AsObject = {
    labelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    startTimeUnixNano: number,
    timeUnixNano: number,
    value: number,
    exemplarsList: Array<IntExemplar.AsObject>,
  }
}

export class DoubleDataPoint extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getStartTimeUnixNano(): number;
  setStartTimeUnixNano(value: number): void;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  clearExemplarsList(): void;
  getExemplarsList(): Array<DoubleExemplar>;
  setExemplarsList(value: Array<DoubleExemplar>): void;
  addExemplars(value?: DoubleExemplar, index?: number): DoubleExemplar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleDataPoint.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleDataPoint): DoubleDataPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleDataPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleDataPoint;
  static deserializeBinaryFromReader(message: DoubleDataPoint, reader: jspb.BinaryReader): DoubleDataPoint;
}

export namespace DoubleDataPoint {
  export type AsObject = {
    labelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    startTimeUnixNano: number,
    timeUnixNano: number,
    value: number,
    exemplarsList: Array<DoubleExemplar.AsObject>,
  }
}

export class IntHistogramDataPoint extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getStartTimeUnixNano(): number;
  setStartTimeUnixNano(value: number): void;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getSum(): number;
  setSum(value: number): void;

  clearBucketCountsList(): void;
  getBucketCountsList(): Array<number>;
  setBucketCountsList(value: Array<number>): void;
  addBucketCounts(value: number, index?: number): number;

  clearExplicitBoundsList(): void;
  getExplicitBoundsList(): Array<number>;
  setExplicitBoundsList(value: Array<number>): void;
  addExplicitBounds(value: number, index?: number): number;

  clearExemplarsList(): void;
  getExemplarsList(): Array<IntExemplar>;
  setExemplarsList(value: Array<IntExemplar>): void;
  addExemplars(value?: IntExemplar, index?: number): IntExemplar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntHistogramDataPoint.AsObject;
  static toObject(includeInstance: boolean, msg: IntHistogramDataPoint): IntHistogramDataPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntHistogramDataPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntHistogramDataPoint;
  static deserializeBinaryFromReader(message: IntHistogramDataPoint, reader: jspb.BinaryReader): IntHistogramDataPoint;
}

export namespace IntHistogramDataPoint {
  export type AsObject = {
    labelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    startTimeUnixNano: number,
    timeUnixNano: number,
    count: number,
    sum: number,
    bucketCountsList: Array<number>,
    explicitBoundsList: Array<number>,
    exemplarsList: Array<IntExemplar.AsObject>,
  }
}

export class DoubleHistogramDataPoint extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getStartTimeUnixNano(): number;
  setStartTimeUnixNano(value: number): void;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getSum(): number;
  setSum(value: number): void;

  clearBucketCountsList(): void;
  getBucketCountsList(): Array<number>;
  setBucketCountsList(value: Array<number>): void;
  addBucketCounts(value: number, index?: number): number;

  clearExplicitBoundsList(): void;
  getExplicitBoundsList(): Array<number>;
  setExplicitBoundsList(value: Array<number>): void;
  addExplicitBounds(value: number, index?: number): number;

  clearExemplarsList(): void;
  getExemplarsList(): Array<DoubleExemplar>;
  setExemplarsList(value: Array<DoubleExemplar>): void;
  addExemplars(value?: DoubleExemplar, index?: number): DoubleExemplar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleHistogramDataPoint.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleHistogramDataPoint): DoubleHistogramDataPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleHistogramDataPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleHistogramDataPoint;
  static deserializeBinaryFromReader(message: DoubleHistogramDataPoint, reader: jspb.BinaryReader): DoubleHistogramDataPoint;
}

export namespace DoubleHistogramDataPoint {
  export type AsObject = {
    labelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    startTimeUnixNano: number,
    timeUnixNano: number,
    count: number,
    sum: number,
    bucketCountsList: Array<number>,
    explicitBoundsList: Array<number>,
    exemplarsList: Array<DoubleExemplar.AsObject>,
  }
}

export class IntExemplar extends jspb.Message {
  clearFilteredLabelsList(): void;
  getFilteredLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setFilteredLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addFilteredLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  getSpanId(): Uint8Array | string;
  getSpanId_asU8(): Uint8Array;
  getSpanId_asB64(): string;
  setSpanId(value: Uint8Array | string): void;

  getTraceId(): Uint8Array | string;
  getTraceId_asU8(): Uint8Array;
  getTraceId_asB64(): string;
  setTraceId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntExemplar.AsObject;
  static toObject(includeInstance: boolean, msg: IntExemplar): IntExemplar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntExemplar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntExemplar;
  static deserializeBinaryFromReader(message: IntExemplar, reader: jspb.BinaryReader): IntExemplar;
}

export namespace IntExemplar {
  export type AsObject = {
    filteredLabelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    timeUnixNano: number,
    value: number,
    spanId: Uint8Array | string,
    traceId: Uint8Array | string,
  }
}

export class DoubleExemplar extends jspb.Message {
  clearFilteredLabelsList(): void;
  getFilteredLabelsList(): Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>;
  setFilteredLabelsList(value: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue>): void;
  addFilteredLabels(value?: opentelemetry_proto_common_v1_common_pb.StringKeyValue, index?: number): opentelemetry_proto_common_v1_common_pb.StringKeyValue;

  getTimeUnixNano(): number;
  setTimeUnixNano(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  getSpanId(): Uint8Array | string;
  getSpanId_asU8(): Uint8Array;
  getSpanId_asB64(): string;
  setSpanId(value: Uint8Array | string): void;

  getTraceId(): Uint8Array | string;
  getTraceId_asU8(): Uint8Array;
  getTraceId_asB64(): string;
  setTraceId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleExemplar.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleExemplar): DoubleExemplar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleExemplar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleExemplar;
  static deserializeBinaryFromReader(message: DoubleExemplar, reader: jspb.BinaryReader): DoubleExemplar;
}

export namespace DoubleExemplar {
  export type AsObject = {
    filteredLabelsList: Array<opentelemetry_proto_common_v1_common_pb.StringKeyValue.AsObject>,
    timeUnixNano: number,
    value: number,
    spanId: Uint8Array | string,
    traceId: Uint8Array | string,
  }
}

export interface AggregationTemporalityMap {
  AGGREGATION_TEMPORALITY_UNSPECIFIED: 0;
  AGGREGATION_TEMPORALITY_DELTA: 1;
  AGGREGATION_TEMPORALITY_CUMULATIVE: 2;
}

export const AggregationTemporality: AggregationTemporalityMap;

