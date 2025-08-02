<h1 align="center">API Fastify Brazillian LOL Teams</h2>
<p align="center">
  <img src="https://giffiles.alphacoders.com/173/173323.gif" width="100%" alt="GIF Sona">
</p>

## 📃 Description
This is a minimal Fastify-based that provides structured data on League of Legends professional teams and their players.

You can:

🔍 List all teams

👥 Search players by team ID

Ideal for learning APIs, working with relational-style data in JSON, or building front-end apps that consume game-related content.


## 📂 Endpoints
GET /teams
Returns a list of all LoL teams.

GET /teams/:id/players
Returns all players that belong to the specified team.

## 🧱 Tech Stack
Fastify – lightweight Node.js framework

Pure JSON – used as the data source

Modular structure – easy to extend with DBs or external APIs later

## 🚧 Future Ideas
Add player search by role or nickname

Include stats (KDA, games played, etc.)

Connect to a real database or admin panel