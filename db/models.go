package db

import (
	// "github.com/lib/pq"
	"time"
)

type Environment struct {
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Execution struct {
	CreatedAt time.Time
	UpdatedAt time.Time
}
