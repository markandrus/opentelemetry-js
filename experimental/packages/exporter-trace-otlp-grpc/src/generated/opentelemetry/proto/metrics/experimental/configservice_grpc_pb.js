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
var opentelemetry_proto_metrics_experimental_configservice_pb = require('../../../../opentelemetry/proto/metrics/experimental/configservice_pb.js');
var opentelemetry_proto_resource_v1_resource_pb = require('../../../../opentelemetry/proto/resource/v1/resource_pb.js');

function serialize_opentelemetry_proto_metrics_experimental_MetricConfigRequest(arg) {
  if (!(arg instanceof opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigRequest)) {
    throw new Error('Expected argument of type opentelemetry.proto.metrics.experimental.MetricConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_metrics_experimental_MetricConfigRequest(buffer_arg) {
  return opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opentelemetry_proto_metrics_experimental_MetricConfigResponse(arg) {
  if (!(arg instanceof opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigResponse)) {
    throw new Error('Expected argument of type opentelemetry.proto.metrics.experimental.MetricConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opentelemetry_proto_metrics_experimental_MetricConfigResponse(buffer_arg) {
  return opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// MetricConfig is a service that enables updating metric schedules, trace
// parameters, and other configurations on the SDK without having to restart the
// instrumented application. The collector can also serve as the configuration
// service, acting as a bridge between third-party configuration services and
// the SDK, piping updated configs from a third-party source to an instrumented
// application.
var MetricConfigService = exports['opentelemetry.proto.metrics.experimental.MetricConfig'] = {
  getMetricConfig: {
    path: '/opentelemetry.proto.metrics.experimental.MetricConfig/GetMetricConfig',
    requestStream: false,
    responseStream: false,
    requestType: opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigRequest,
    responseType: opentelemetry_proto_metrics_experimental_configservice_pb.MetricConfigResponse,
    requestSerialize: serialize_opentelemetry_proto_metrics_experimental_MetricConfigRequest,
    requestDeserialize: deserialize_opentelemetry_proto_metrics_experimental_MetricConfigRequest,
    responseSerialize: serialize_opentelemetry_proto_metrics_experimental_MetricConfigResponse,
    responseDeserialize: deserialize_opentelemetry_proto_metrics_experimental_MetricConfigResponse,
  },
};

