package entities

import (
	"gorm.io/gorm"
	"time"
)

type Base struct {
	Uid       string `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
