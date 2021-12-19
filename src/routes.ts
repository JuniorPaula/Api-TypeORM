import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);

export { routes };
