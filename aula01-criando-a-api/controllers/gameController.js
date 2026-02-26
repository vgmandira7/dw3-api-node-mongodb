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

export default {getAllGames}
