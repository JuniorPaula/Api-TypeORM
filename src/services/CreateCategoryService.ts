import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    /** verificar se a categoria já existe */
    if (await repo.findOne({ name })) {
      return new Error('Category already exist!');
    }

    const category = repo.create({ name, description });

    await repo.save(category);

    return category;
  }
}
