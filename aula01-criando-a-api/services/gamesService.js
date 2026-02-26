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
}
export default new gameService();