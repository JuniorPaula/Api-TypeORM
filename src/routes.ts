import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);

export { routes };
