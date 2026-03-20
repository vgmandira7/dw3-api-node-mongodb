import Game from "../models/Games.js";

class gameService {
    async getAll() {
        try{
            const games = await Game.find(); //nesse caso ele fala, para esperar, só continuar quando a lista de games chegar   
            return games;
        } catch(error) {
            console.log(error)
        }
    }
    // Método para cadastrar um game
    async Create(title, year, price, descriptions){
        try{
            const newGame = new Game({
                // desestruturação é não repetir os campo, exemplo title : title
                title, 
                year, 
                price,
                descriptions
            })
            //Gravando no banco
            await newGame.save() //.save() método do mongoose para cadastrar no bd

        } catch(error){
            console.log(error)
        }
    }

    //Método para excluir um jogo
    async Delete(id) {
        try{
            // excluindo um jogo pela id
            await Game.findByIdAndDelete(id)
            console.log(`game com a id ${id} foi deletado.`)

        }catch(error){
            console.log(error)

        }
    }
    //Método para alterar um jogo
    async Update(id, title, year, price, descriptions){
        try{
            await Game.findByIdAndUpdate(id, {
                title,
                
                year,
                price,
                descriptions
            })
            console.log(`O jogo com a id ${id} foi alterado`)
        }catch(error){
            console.log(error)
        }
    }
    async Update (id, title, year, price, descriptions) {
        try{
            const gameUpdate = await Game.findByIdAndUpdate(id, {
                title,
                
                year,
                price,
                descriptions
            },
            { new: true }
        )
        console.log(`O jogo com a ID ${id} foi alterada`)
        return gameUpdate
        } catch (error) {
            console.log(error)
        }
    }

    // metodo para listar um jogo unico
    async getOne(id) {
        try{
            const game = await Game.findOne({_id: id})
            return game
            
        }catch(error){
            console.log(error)
        }
    }
}



export default new gameService();