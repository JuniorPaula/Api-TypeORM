import 'reflect-metadata';

import express from 'express';

/** importar a conexão */
import './database';

/** importar as rotas */
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3005, () => console.log('server is running...'));
