//Durante ao tratamento de requisição ele vai usar um serviço
// importando services
import gameService from "../services/gamesService.js";

// Função para tratar a requisição de listar os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({games : games})
        //cod. 200 (OK) - Requisição feita com sucesso
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor'})
        //500 é o código de erro no servidor

    }
}

//Função para tratar a requisição de CADATRAR um jogo
const createGame = async(req, res) => {
    try{
        // desestruturação
        // const title
        // const platform

        const {title, platform, year, price} = req.body
        // Passando os dados para o service
        await gameService.Create(title, platform, year, price)
        res.status(201).json({message: 'O jogo foi cadastrado com sucesso!'})
        // cod 201 - created um novo recurso foi criado no servidor
    }catch(error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor. Não foi possive cadastrar o jogo"})
    }
}


export default {getAllGames, createGame}
