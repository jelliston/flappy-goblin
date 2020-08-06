/* The server.js file will serve 2 roles 
1. to host game files 
2. game server that can maintain the game state and publish it back to all the players 
(all players will communicate with Ably, and then Ably will communicate with the server)
*/

/* 3 server-side libraries are used with this project:
1. Express - to listen for requests and send back responses (use to send game files to any player who would like to play)
2. dotenv - to load ENV variables
3. Ably - to implement websocket-based realtime messaging
*/
