import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class StreamMessagesResponse extends jspb.Message {
  getId(): string;
  setId(value: string): StreamMessagesResponse;

  getContent(): string;
  setContent(value: string): StreamMessagesResponse;

  getDate(): string;
  setDate(value: string): StreamMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessagesResponse): StreamMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: StreamMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessagesResponse;
  static deserializeBinaryFromReader(message: StreamMessagesResponse, reader: jspb.BinaryReader): StreamMessagesResponse;
}

export namespace StreamMessagesResponse {
  export type AsObject = {
    id: string,
    content: string,
    date: string,
  }
}

export class CreateMessageRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): CreateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
  static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
  export type AsObject = {
    content: string,
  }
}

