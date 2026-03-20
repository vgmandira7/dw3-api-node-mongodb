import express from "express"
// importando o mongoose
import mongoose from "mongoose";
import Game from './models/Games.js'
// importando as rotas
import gameRoutes from './routes/gameRoutes.js';
const app = express();



//configurações do Express
app.use(express.json()) //permite o uso de json na aplicação
// Ativando a utilização das rotas
app.use("/", gameRoutes)

// iniciado a conexão com o banco de dados mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")



// app.get("/", (req, res) => {
//     const games = [{
//         title: "Game 1",
//         year: 2020,
//         platform: "PC",
//         price: 20
//     },
//     {
//         title: "Game 2",
//         year: 2022,
//         platform: "Xbox",
//         price: 50
//     },
// ];
//     res.status(200).json(games);
// });

// rodando api na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Servidor iniciado em http://localhost:${port}`);

    }
})