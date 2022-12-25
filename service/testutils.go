package service

import (
	"github.com/panyam/snippets/db"
	"github.com/panyam/snippets/utils"
	"testing"
)

func CreateTestControlDB(t *testing.T) db.SnippetsDB {
	// db, dir := OpenSqliteDB(t, forcedir)
	// DB Endpoint eg: postgres://user:pass@localhost:5432/dbname
	dbendpoint := "postgres://postgres:docker@localhost:5432/snippetsdb"
	gormdb := utils.OpenPostgresDB(t, dbendpoint)
	gormdb.Where("1 = 1").Delete(&db.Environment{})
	gormdb.Where("1 = 1").Delete(&db.Execution{})
	return db.New(gormdb)
}
