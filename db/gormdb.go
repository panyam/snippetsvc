package db

import (
	// "errors"
	"gorm.io/gorm"
	// "log"
	// "time"
)

type DB struct {
	storage *gorm.DB
}

func New(gormdb *gorm.DB) SnippetsDB {
	gormdb.AutoMigrate(&Environment{})
	gormdb.AutoMigrate(&Execution{})
	return &DB{storage: gormdb}
}

func (db *DB) GetExecution() ([]*Execution, error) {
	return nil, nil
}

func (db *DB) GetEnvironment() ([]*Environment, error) {
	return nil, nil
}

// Updates/Creates a execution
func (db *DB) SaveExecution(execution *Execution) error {
	return nil
}

// Updates/Creates a execution
func (db *DB) SaveEnvironment(environment *Environment) error {
	return nil
}

// Updates/Creates a execution
func (db *DB) DeleteExecution(execution *Execution) error {
	return nil
}

// Updates/Creates a execution
func (db *DB) DeleteEnvironment(environment *Environment) error {
	return nil
}
