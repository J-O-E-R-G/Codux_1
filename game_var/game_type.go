package game

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Game struct {
	Category, Message string
}

func GameTypeRequest(c *gin.Context) {
	gameCategories := map[string]Game{"biology": {"biology", "Welcome to biology games"}, "history": {"history", "Welcome to history games"}}

	if game, ok := gameCategories[c.Param("category")]; ok {
		c.JSON(http.StatusOK, game)
	} else {
		c.JSON(http.StatusNotFound, gin.H{"status": "not found"})
	}
}
