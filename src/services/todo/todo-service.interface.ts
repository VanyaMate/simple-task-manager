import { IService } from '@/services/service.interface.ts';
import { CreateTodo, Todo, UpdateTodo } from '@/services/todo/todo.types.ts';


export interface ITodoService extends IService<Todo, CreateTodo, UpdateTodo> {
}