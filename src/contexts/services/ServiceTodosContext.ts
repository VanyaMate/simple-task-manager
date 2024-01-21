import { createContext } from 'react';
import { ITodoService } from '@/services/todo/todo-service.interface.ts';
import {
    LocalStorageTodoService,
} from '@/services/todo/implements/local-storage-todo-service/local-storage-todo-service.ts';
import {
    SingleTodoLocalService,
} from '@/services/todo/implements/local-storage-todo-service/single-todo-local-service.ts';
import {
    MultiplyTodoLocalService,
} from '@/services/todo/implements/local-storage-todo-service/multiply-todo-local-service.ts';


export const ServiceTodosContext = createContext<ITodoService>(
    new LocalStorageTodoService(
        new SingleTodoLocalService(),
        new MultiplyTodoLocalService(),
    ),
);