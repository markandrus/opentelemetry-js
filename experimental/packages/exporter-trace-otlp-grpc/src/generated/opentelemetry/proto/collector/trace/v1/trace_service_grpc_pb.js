// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019, OpenTelemetry Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var opentelemetry_proto_collector_trace_v1_trace_service_pb = require('../../../../../opentelemetry/proto/collector/trace/v1/trace_service_pb.js');
var opentelemetry_proto_trace_v1_trace_pb = require('../../../../../opentelemetry/proto/trace/v1/trace_pb.js');

function serialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceRequest(arg) {
  if (!(arg instanceof opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceRequest)) {
    throw new Error('Expected argument of type opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceRequest(buffer_arg) {
  return opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceResponse(arg) {
  if (!(arg instanceof opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceResponse)) {
    throw new Error('Expected argument of type opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceResponse(buffer_arg) {
  return opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that can be used to push spans between one Application instrumented with
// OpenTelemetry and an collector, or between an collector and a central collector (in this
// case spans are sent/received to/from multiple Applications).
var TraceServiceService = exports['opentelemetry.proto.collector.trace.v1.TraceService'] = {
  // For performance reasons, it is recommended to keep this RPC
// alive for the entire life of the application.
export: {
    path: '/opentelemetry.proto.collector.trace.v1.TraceService/Export',
    requestStream: false,
    responseStream: false,
    requestType: opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceRequest,
    responseType: opentelemetry_proto_collector_trace_v1_trace_service_pb.ExportTraceServiceResponse,
    requestSerialize: serialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceRequest,
    requestDeserialize: deserialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceRequest,
    responseSerialize: serialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceResponse,
    responseDeserialize: deserialize_opentelemetry_proto_collector_trace_v1_ExportTraceServiceResponse,
  },
};

