import express from 'express';
import gameController from '../controllers/gameController.js';

const gameRoutes = express.Router()

// na camada de routes é armazenado os ENDPOINTS (URLs) da API

//Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)





//Endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

//endpoint para excluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

gameRoutes.put("/games/:id", gameController.UpdateGame)

gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;