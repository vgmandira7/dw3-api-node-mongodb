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
    async Create(title, platform, year, price){
        try{
            const newGame = new Game({
                // desestruturação é não repetir os campo, exemplo title : title
                title, 
                platform, 
                year, 
                price
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
}
export default new gameService();