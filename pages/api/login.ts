import type {NextApiRequest, NextApiResponse} from 'next';
import { DefaultMsgResponde } from '../../types/DefaultMsgResponse';

export default (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponde>) => {
    if(req.method === 'POST'){

        const {login, password} = req.body; 
        if(login === 'natalia@gmail.com' && password === 'Senha@123'){
             return res.status(200).json({msg: 'Login autenticado!'})
        }

        return res.status(400).json({msg: 'Usuario nao encontrado'})
    }
    return res.status(405).json({error: 'Metodo informado nao é permitido'})
}