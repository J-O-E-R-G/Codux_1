package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Game struct {
	Category  string `json:"category"`
	Message   string `json:"message"`
	GameName  string `json:"GameName"`
	GameAbout string `json:"GameAbout"`
}

func main() {
	r := gin.Default()

	// CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // replace with your client app URL
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.GET("/games/:category", func(c *gin.Context) {
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
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
