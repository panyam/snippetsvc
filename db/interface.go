package db

import (
	"errors"
)

var UpdateFailed = errors.New("Update failed concurrency check")

type SnippetsDB interface {
	GetEnvironments(ids []string) ([]*Environment, error)

	// Updates/Creates a execution
	SaveEnvironment(environment *Environment) error

	// Updates/Creates a execution
	DeleteEnvironment(environment *Environment) error

	GetExecution() ([]*Execution, error)

	// Updates/Creates a execution
	SaveExecution(execution *Execution) error

	// Updates/Creates a execution
	DeleteExecution(execution *Execution) error
}
