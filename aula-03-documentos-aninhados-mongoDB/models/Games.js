import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
})

const gameSchema = new mongoose.Schema({
    title: String,
    // platform: String,    
    year: Number,
    price: Number,
    descriptions : descriptionSchema

    // definindo o campo como array
    // descriptions : [descriptionSchema]
});

const Game = mongoose.model('Game', gameSchema);

export default Game;