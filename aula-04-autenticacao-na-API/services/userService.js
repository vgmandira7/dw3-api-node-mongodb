import { User } from "../models/Users.js"

class userService {
    //Método para cadastrar um usuario
    async Create(name, email, password) {
        try{
            const newUser = new User( {
                name,
                email,
                password,
            })
            // .save() -> Utilizado para gravar um registro no BD
            await newUser.save();
        } catch(error){
            console.log(error);
        }
    }

        async getOne(email) {
            try{
                const User = await User.findOne({email: email})
                return User
                
            }catch(error){
                console.log(error)
            }
        }
}

export default new userService();