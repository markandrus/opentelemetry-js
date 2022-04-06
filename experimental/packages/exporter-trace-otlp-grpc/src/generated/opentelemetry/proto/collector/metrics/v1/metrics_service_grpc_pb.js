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
var opentelemetry_proto_collector_metrics_v1_metrics_service_pb = require('../../../../../opentelemetry/proto/collector/metrics/v1/metrics_service_pb.js');
var opentelemetry_proto_metrics_v1_metrics_pb = require('../../../../../opentelemetry/proto/metrics/v1/metrics_pb.js');

function serialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceRequest(arg) {
  if (!(arg instanceof opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceRequest)) {
    throw new Error('Expected argument of type opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceRequest(buffer_arg) {
  return opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceResponse(arg) {
  if (!(arg instanceof opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceResponse)) {
    throw new Error('Expected argument of type opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceResponse(buffer_arg) {
  return opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that can be used to push metrics between one Application
// instrumented with OpenTelemetry and a collector, or between a collector and a
// central collector.
var MetricsServiceService = exports['opentelemetry.proto.collector.metrics.v1.MetricsService'] = {
  // For performance reasons, it is recommended to keep this RPC
// alive for the entire life of the application.
export: {
    path: '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export',
    requestStream: false,
    responseStream: false,
    requestType: opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceRequest,
    responseType: opentelemetry_proto_collector_metrics_v1_metrics_service_pb.ExportMetricsServiceResponse,
    requestSerialize: serialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceRequest,
    requestDeserialize: deserialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceRequest,
    responseSerialize: serialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceResponse,
    responseDeserialize: deserialize_opentelemetry_proto_collector_metrics_v1_ExportMetricsServiceResponse,
  },
};

