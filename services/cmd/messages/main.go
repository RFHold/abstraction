package main

import (
	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"services/internal/config"
)

type environmentConfig struct {
	Environment string `envconfig:"ENVIRONMENT"`
	Debug       bool   `envconfig:"DEBUG"`
	DBConfig    config.DBConfig
}

func getConfig() (environmentConfig, error) {
	_ = godotenv.Overload(".env", ".env.local") // For .env file in local development

	var cfg environmentConfig
	err := envconfig.Process("", &cfg)

	if err != nil {
		return environmentConfig{}, err
	}

	return cfg, nil
}

func main() {

}
