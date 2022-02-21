package config

import "fmt"

type DBConfig struct {
	PostgresHost     string `envconfig:"POSTGRES_HOST"`
	PostgresPort     string `envconfig:"POSTGRES_PORT" default:"5432"`
	PostgresDatabase string `envconfig:"POSTGRES_DATABASE"`
	PostgresUsername string `envconfig:"POSTGRES_USERNAME"`
	PostgresPassword string `envconfig:"POSTGRES_PASSWORD"`
	PostgresSSL      string `envconfig:"POSTGRES_SSL"`
}

func (c DBConfig) DBString() string {
	return fmt.Sprintf("user=%s password=%s dbname=%s port=%s host=%s sslmode=%s", c.PostgresUsername, c.PostgresPassword, c.PostgresDatabase, c.PostgresPort, c.PostgresHost, c.PostgresSSL)
}
