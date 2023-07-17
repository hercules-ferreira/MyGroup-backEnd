// pacotes
require('dotenv/config');
const mongoose = require('mongoose');


// modelos
const Like = require('../models/Like.model');

// dados
const data = require('./myLikes-data.json');

// configuração do banco de dados
const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  console.log('Aguarde conexão com banco de dados...');
  try {
    const x = await mongoose.connect(DB_URI);
    console.log(`Conectado ao banco de dados: "${x.connections[0].name}"`);
  } catch (error) {
    console.log('Falha ao conectar bando de dados!', error);
    process.exit();
  }
}

const createLikes = async () => {
  console.log('Inserindo informações no banco de dados...');
  try {
    const likesFromDB = await Like.create(data);
    console.log(`Foram inseridos ${likesFromDB.length} documentos no banco de dados!`)
  } catch (error) {
    console.error('Erro ao inserir like no banco de dados.');
  }
}

const seed = async () => {
  try {
    await connectDB();
    await Like.collection.drop();
    await createLikes();
    mongoose.connection.close();
    console.log('Conexão encerrada.')
  } catch (error) {
    console.error('Erro ao executar o script.', error);
  }
}

seed();