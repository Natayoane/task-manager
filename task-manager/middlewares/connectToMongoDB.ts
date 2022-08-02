import mongoose from 'mongoose'
import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next'
import { DefaultMsgResponde } from '../types/DefaultMsgResponse'

export const connect = (handler: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponde>) => {
        console.log('MongoDB readyState', mongoose.connections[0].readyState);
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }

        const DB_CONNECTION_STRING = 'mongodb://localhost:27017/db-task-manager'
        
        mongoose.connect('connect', () => console.log('Conectado no banco de dados'));
        mongoose.connect('error', err => console.log('Erro ao conectar no banco de dados', err));

        await mongoose.connect(DB_CONNECTION_STRING);
    }  