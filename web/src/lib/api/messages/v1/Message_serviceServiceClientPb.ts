/**
 * @fileoverview gRPC-Web generated client stub for messages.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as messages_v1_message_service_pb from '../../messages/v1/message_service_pb';


export class MessageServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorStreamMessages = new grpcWeb.MethodDescriptor(
    '/messages.v1.MessageService/StreamMessages',
    grpcWeb.MethodType.SERVER_STREAMING,
    google_protobuf_empty_pb.Empty,
    messages_v1_message_service_pb.StreamMessagesResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    messages_v1_message_service_pb.StreamMessagesResponse.deserializeBinary
  );

  streamMessages(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<messages_v1_message_service_pb.StreamMessagesResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/messages.v1.MessageService/StreamMessages',
      request,
      metadata || {},
      this.methodDescriptorStreamMessages);
  }

  methodDescriptorCreateMessage = new grpcWeb.MethodDescriptor(
    '/messages.v1.MessageService/CreateMessage',
    grpcWeb.MethodType.UNARY,
    messages_v1_message_service_pb.CreateMessageRequest,
    google_protobuf_empty_pb.Empty,
    (request: messages_v1_message_service_pb.CreateMessageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createMessage(
    request: messages_v1_message_service_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createMessage(
    request: messages_v1_message_service_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createMessage(
    request: messages_v1_message_service_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/messages.v1.MessageService/CreateMessage',
        request,
        metadata || {},
        this.methodDescriptorCreateMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/messages.v1.MessageService/CreateMessage',
    request,
    metadata || {},
    this.methodDescriptorCreateMessage);
  }

}

