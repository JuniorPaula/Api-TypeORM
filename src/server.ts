import 'reflect-metadata';

import express from 'express';

/** importar a conexão */
import './database';

const app = express();

app.listen(3005, () => console.log('server is running...'));
