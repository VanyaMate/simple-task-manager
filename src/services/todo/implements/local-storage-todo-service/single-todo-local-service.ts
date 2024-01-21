import { SingleService, StorageService } from '@vanyamate/market-place-service';
import { CreateTodo, Todo, UpdateTodo } from '@/services/todo/todo.types.ts';
import {
    LS_TODOS_SERVICE_STORAGE,
} from '@/services/todo/implements/local-storage-todo-service/local-storage-todo-service.consts.ts';
import {
    LocalStorageTodoServiceDataGenerator,
} from '@/services/todo/implements/local-storage-todo-service/local-storage-todo-service.data-generator.ts';


export class SingleTodoLocalService extends SingleService<Todo, CreateTodo, UpdateTodo> {
    constructor () {
        super(
            new StorageService(localStorage, LS_TODOS_SERVICE_STORAGE),
            new LocalStorageTodoServiceDataGenerator(),
            {
                options: {
                    pk     : 'id',
                    timeout: 100,
                },
            },
        );
    }
}