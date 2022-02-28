package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
	"services/internal/config"
	"services/internal/database"
	"services/internal/services/messages"
	messagesv1 "services/pb/messages/v1"
)

type environmentConfig struct {
	Environment string `envconfig:"ENVIRONMENT"`
	Debug       bool   `envconfig:"DEBUG"`
	Port        uint   `envconfig:"PORT" default:"80"`
	DBConfig    config.DBConfig
}

func getConfig() (environmentConfig, error) {
	if err := godotenv.Overload(".env", ".env.local"); err != nil && !os.IsNotExist(err) {
		return environmentConfig{}, err
	}

	var cfg environmentConfig
	if err := envconfig.Process("", &cfg); err != nil {
		return environmentConfig{}, err
	}

	return cfg, nil
}

func main() {
	cfg, err := getConfig()
	if err != nil {
		log.Fatalf("failed to get config: %v", err)
	}

	db, err := database.Connect(cfg.DBConfig)
	if err != nil {
		log.Fatalf("failed connect to database: %v", err)
	}

	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%d", cfg.Port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	messagesv1.RegisterMessageServiceServer(grpcServer, messages.MessageServer{DB: db})
	grpcServer.Serve(lis)

}
