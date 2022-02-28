package messages

import (
	"context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"
	"gorm.io/gorm"
	messagesv1 "services/pb/messages/v1"
)

type MessageServer struct {
	messagesv1.UnimplementedMessageServiceServer
	DB *gorm.DB
}

func (MessageServer) StreamMessages(*emptypb.Empty, messagesv1.MessageService_StreamMessagesServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamMessages not implemented")
}
func (MessageServer) CreateMessage(context.Context, *messagesv1.CreateMessageRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMessage not implemented")
}
