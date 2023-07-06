# Needs Fixing 
## Full
### P1  
When http://localhost:5173/games/history or http://localhost:5173/games/biology is loaded 2 GET Requests are sent. \
[GIN] 2023/07/05 - 21:45:59 | 200 |            0s |             ::1 | GET      "/games/history" \
[GIN] 2023/07/05 - 21:45:59 | 200 |            0s |             ::1 | GET      "/games/history" \
 \
When http://localhost:8080/games/history or http://localhost:8080/games/biology is loaded 1 GET Requests are sent. \
Problem is somehwere in  \
router -> src/main.tsx \
home page -> src/App.tsx \
game page -> src/Games.tsx \

### P2 
Text on home page bounces quickly after hover, idk im done w this 

## Server

## Front End
