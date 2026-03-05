//Durante ao tratamento de requisição ele vai usar um serviço
// importando services
import gameService from "../services/gamesService.js";
import {ObjectId} from 'mongodb'

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

//Função para deletar um jogo
const deleteGame = async (req, res) => {
    try{
        const id = req.params.id
        //Coletando a id 
        //validação do id
        if (ObjectId.isValid(id)){
            await gameService.Delete(id)
            res.status(200).json({message: 'O jogo foi excluido com sucesso'})
            //cod. 204 (no content)
        } else {
            res.status(400).json({ error: 'Ocorreu um erro na validação da ID'})
        }
            
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Erro intenso do servidor'})
    }
}

//função para alterar jogo
const UpdateGame = async (req, res) => {
    try{
        const id = req.params.id
         if (ObjectId.isValid(id)){
            const {title, platform, year, price} = req.body

            await gameService.Update(id, title, platform, year, price)
            res.status(200).json({message: 'O jogo foi updeitado com sucesso'})
            //cod. 204 (no content)
         }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Erro intenso do servidor'})
    }
}


export default {getAllGames, createGame, deleteGame}
