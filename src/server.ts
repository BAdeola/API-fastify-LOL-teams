import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });
const port = Number(process.env.PORT) || 3000;

const teams = [
    //Furia
    { id: 1, name: "Furia", country: "br", players: [1, 2, 3, 4, 5] },
    { id: 2, name: "LOUD", country: "br", players: [6, 7, 8, 9, 10] },
    { id: 3, name: "INTZ", country: "br", players: [11, 12, 13, 14, 15] },
    { id: 4, name: "paiN", country: "br", players: [16, 17, 18, 19, 20] },
];

const players = [
    //Furia
    { id: 1, nick: "GUIGO", name: "Guilherme Ruiz", age: 23, country: "br", role: "TOP" },
    { id: 2, nick: "Tatu", name: "Pedro Seixas", age: 19, country: "br", role: "JUNGLE" },
    { id: 3, nick: "JoJo", name: "Gabriel Dzelme de Oliveira", age: 26, country: "br", role: "SUP" },
    { id: 4, nick: "Tutsz", name: "Arthur Peixoto Machado", age: 22, country: "br", role: "MID" },
    { id: 5, nick: "Ayu", name: "Andrei Saraiva", age: 19, country: "br", role: "BOT" },

    //LOUD
    { id: 6, nick: "Robo", name: "Leon Victor", age: 25, country: "br", role: "TOP", team: "LOUD" },
    { id: 7, nick: "Croc", name: "Kim Dong-beom", age: 23, country: "kr", role: "JUNGLE", team: "LOUD" },
    { id: 8, nick: "tinowns", name: "Thiago Sartori", age: 26, country: "br", role: "MID", team: "LOUD" },
    { id: 9, nick: "Ceos", name: "Denilson Oliveira", age: 24, country: "br", role: "SUP", team: "LOUD" },
    { id: 10, nick: "Route", name: "Park Jae-hyun", age: 24, country: "kr", role: "BOT", team: "LOUD" },

    // INTZ
    { id: 11, nick: "Kiari", name: "Mateus Duarte", age: 21, country: "br", role: "TOP", team: "INTZ" },
    { id: 12, nick: "Yampi", name: "Gabriel Dzelme", age: 24, country: "br", role: "JUNGLE", team: "INTZ" },
    { id: 13, nick: "Piloto", name: "Lucas Barbosa", age: 22, country: "br", role: "MID", team: "INTZ" },
    { id: 14, nick: "Damage", name: "Matheus Marques", age: 25, country: "br", role: "SUP", team: "INTZ" },
    { id: 15, nick: "micaO", name: "Gustavo Rodrigues", age: 28, country: "br", role: "BOT", team: "INTZ" },

    // paiN Gaming
    { id: 16, nick: "Wizer", name: "Kim Tae-hoon", age: 26, country: "kr", role: "TOP", team: "paiN" },
    { id: 17, nick: "CarioK", name: "Marcel Borges", age: 23, country: "br", role: "JUNGLE", team: "paiN" },
    { id: 18, nick: "dyNquedo", name: "Marcelo Júnior", age: 25, country: "br", role: "MID", team: "paiN" },
    { id: 19, nick: "ProDelta", name: "Matheus Silva", age: 22, country: "br", role: "SUP", team: "paiN" },
    { id: 20, nick: "Tracer", name: "Lucas Silva", age: 20, country: "br", role: "BOT", team: "paiN" }
];

server.register(cors, {
    origin: "*",
    methods: ["GET"],
});

server.get("/teams", async (request, reply) => {
    reply.type("application/json").code(200);
    return { teams };
});

server.get("/players", async (request, reply) => {
    reply.type("application/json").code(200);
    return { players };
});

server.get("/teams/:id/players", async (request, reply) => {
    const teamId = Number((request.params as any).id);
    const team = teams.find(team => team.id === teamId);

    if (!team) {
        reply.code(404).send({ error: "Time não encontrado" });
        return;
    }

    const teamPlayers = players.filter(p => team.players.includes(p.id));
    reply.type("application/json").code(200);
    return { team: team.name, players: teamPlayers };
});

server.listen({ port }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});