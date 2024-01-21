import { Filter, MultiplyResponse, Options } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export interface IService<Type, CreateType, UpdateType> {
    create (data: CreateType): Promise<Type>;

    update (id: string, data: UpdateType): Promise<Type>;

    delete (id: string): Promise<boolean>;

    findOne (id: string): Promise<Type | null>;

    findMany (filter: Filter<Todo>, options: Options<Todo>): Promise<MultiplyResponse<Todo>>;
}