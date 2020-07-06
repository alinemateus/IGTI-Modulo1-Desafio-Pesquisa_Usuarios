/*Imports */
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';
const app = express();

require('dotenv').config();

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://
    {$process.env.USERDB}
          :  
        {$process.env.PWDDB}  
        @cluster0.frrex.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);
app.listen(PORT, () => console.log('API inicializada'));
