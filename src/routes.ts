import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/videos', new CreateVideoController().handle);

export { routes };
