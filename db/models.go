package db

import (
	// "github.com/lib/pq"
	"time"
)

type Environment struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	OwnerId   string
	Id        string
	Name      string
	Platform  string
}

type Execution struct {
	CreatedAt time.Time
	UpdatedAt time.Time
}
