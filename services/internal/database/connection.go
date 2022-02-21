package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"services/internal/config"
)

func Connect(cfg config.DBConfig) (*gorm.DB, error) {
	db, err := gorm.Open(postgres.Open(cfg.DBString()), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	return db, nil
}
