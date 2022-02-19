import * as jspb from 'google-protobuf'



export class MessageFrame extends jspb.Message {
  getId(): string;
  setId(value: string): MessageFrame;

  getContent(): string;
  setContent(value: string): MessageFrame;

  getDate(): string;
  setDate(value: string): MessageFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFrame.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFrame): MessageFrame.AsObject;
  static serializeBinaryToWriter(message: MessageFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFrame;
  static deserializeBinaryFromReader(message: MessageFrame, reader: jspb.BinaryReader): MessageFrame;
}

export namespace MessageFrame {
  export type AsObject = {
    id: string,
    content: string,
    date: string,
  }
}

