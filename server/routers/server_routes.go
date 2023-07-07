package routers

import (
	"github.com/gin-gonic/gin"
)

type Game struct {
	Category  string `json:"category"`
	Message   string `json:"message"`
	GameName  string `json:"GameName"`
	GameAbout string `json:"GameAbout"`
}

func get_route(c *gin.Context) {
	category := c.Param("category")

	var game Game

	if category == "biology" {
		game = Game{
			Category:  "biology",
			Message:   "Welcome to biology games",
			GameName:  "Guess the Animal",
			GameAbout: "Read Characteristics of a given species and give your best guess",
		}
	} else if category == "history" {
		game = Game{
			Category:  "history",
			Message:   "Welcome to history games",
			GameName:  "Guess the Guy",
			GameAbout: "Read Characteristics and Achievments and give your best guess",
		}
	} else {
		c.JSON(404, gin.H{
			"status": "not found",
		})
		return
	}

	c.JSON(200, game)
}
