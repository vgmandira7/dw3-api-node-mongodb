import userService from "../services/userService";
// importando o jwt
import jwt from 'jsonwebtoken'

// segredo para gerar o token da API
const JWTSecret = 'thegames-secret'

const createUser = async(req, res) => {
    try{
        //Coletando dados
        const { name, email, password} = req.body;
        //Enviando para cadastrar
        await userService.Create(name, email, password);
        //Retornando resposta
        res.status(201).json({ message: "Usuario cadastrado com sucesso"});
        //code 201 (CREATED)
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Não foi possivel cadastrar o usuario. Erro interno no servidor"});

    }
}

// Função para autenticar um usuario
const loginUser = async (req, res) => {
    try{
        const { email, password} = req.body
        //Se o email existe 
        if (email != undefined){
            const user = await userService.getOne(email)
            //se o usuario for encontrado
            if(user != undefined) {
                //Verificando 
                // se a senha está correta

                if(user.password == password){
                    //CRIAR O TOKEN 
                    jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
                        // falha
                        if(error){

                            res.status(400).json({error: "Não foi possivel gerar o token de autenticação"})
                        } else {
                            res.status(200).json({message:"login realizado com sucesso", token: token }) 
                        }
                    })
                    //senha incorreta

                }else {
                    res.status(401).json({ error: "Suas credenciais são invalidas. Acesso negado" })
                    //cod 401 nao autorizado
                }
            //Usuario nao encontrado
            } else {
                res.status(404).json({ error: "Usuarios informado nao foi encontrado" })
            }
            //email invalido ou vazio
        } else {
            res.status(404).json({ error: "Email invalido ou nao informado" })
        }


    }   catch (error){
        console.log(error)
        res.status(500).json({error: "Não foi possivel realizar o login. Erro interno do servidor"})
    }
}

export default { createUser, loginUser }