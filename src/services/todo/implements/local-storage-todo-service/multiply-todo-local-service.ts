import { MultiplyService, StorageService } from '@vanyamate/market-place-service';
import { Todo } from '@/services/todo/todo.types.ts';
import {
    LS_TODOS_SERVICE_STORAGE,
} from '@/services/todo/implements/local-storage-todo-service/local-storage-todo-service.consts.ts';


export class MultiplyTodoLocalService extends MultiplyService<Todo> {
    constructor () {
        super(
            new StorageService(localStorage, LS_TODOS_SERVICE_STORAGE),
            {
                options: {
                    findOneFilter       : (todo: Todo, id: string) => todo.id === id,
                    maxOperationsPerStep: 10,
                    timeout             : 150,
                    items               : [],
                },
            },
        );
    }
}