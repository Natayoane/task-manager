import type {NextApiRequest, NextApiResponse} from 'next';

import { DefaultMsgResponde } from '../../types/DefaultMsgResponse'
import {UserModel} from '../../models/UserModel'
import {connect} from '../../middlewares/connectToMongoDB'

const registerEndpoint = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponde>) => {
    try {
        if(req.method === 'POST'){
            const {name, email, password} = req.body; 

            if(!name || name.trim().length < 2){
                return res.status(400).json({error: 'Nome não é valido'})
            }

            if(!email || email.trim().length < 5 || !email.includes('@') || !email.includes('.')){
                return res.status(400).json({error: 'Email não é valido'})
            }

            if(!password || password.trim().length < 6){
                return res.status(400).json({error: 'O password precisa ter pelo menos 6 caracteres'})
            }

            const user = {
                name, 
                email, 
                password
            }


            await UserModel.create(user);
            return res.status(200).json({error: 'Usuário cadastrado com sucesso'})
        }
        return res.status(400).json({msg: 'Metodo informado nao existe'})

    } catch (e) {
        console.log('Error on create user: ', e)
        return res.status(500).json({error: 'Não foi possivel cadastrar o usuário'})
    }
}

export default connect(registerEndpoint)