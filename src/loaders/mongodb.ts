import mongoose from "mongoose";

const dbUrl: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

async function startDB() {
    await mongoose.connect(dbUrl);
    //     , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }


    // 'mongodb://localhost:27017/nome_do_banco').then(() => {
    //     console.log('Conectado ao MongoDB local!');
    // }).catch((err) => {
    //     console.error('Erro ao conectar ao MongoDB:', err);
    // }
}

export default startDB