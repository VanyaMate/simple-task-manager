import { CreateTodo, UpdateTodo } from '@/services/todo/todo.types.ts';
import { useCallback, useContext, useMemo } from 'react';
import { ITodoService } from '@/services/todo/todo-service.interface.ts';
import { ServiceTodosContext } from '@/contexts/services/ServiceTodosContext.ts';
import {
    TodosOptionsContext,
    TodosOptionsContextType,
} from '@/contexts/todos/TodosOptionsContext.ts';
import { TodosContext } from '@/contexts/todos/TodosContext.ts';


export interface ITodoActions {
    create (createData: CreateTodo): Promise<string>;

    update (id: string, updateData: UpdateTodo): Promise<string>;

    remove (id: string): Promise<string>;
}

export const useTodoActions = function (): ITodoActions {
    const service: ITodoService            = useContext(ServiceTodosContext);
    const options: TodosOptionsContextType = useContext(TodosOptionsContext);
    const { updateTodo }                   = useContext(TodosContext);

    const create = useCallback(async (createTodo: CreateTodo) => {
        return service
            .create(createTodo)
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .then(() => '')
            .catch((e) => e.message);
    }, [ service, options ]);

    const update = useCallback(async (id: string, updateData: UpdateTodo) => {
        return service
            .update(id, updateData)
            .then(() => updateTodo(id, updateData))
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .then(() => '')
            .catch((e) => e.message);
    }, [ service, options, updateTodo ]);

    const remove = useCallback(async (id: string) => {
        return service
            .delete(id)
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .then(() => '')
            .catch((e) => e.message);
    }, [ service, options ]);

    return useMemo(() => ({
        create, update, remove,
    }), [ create, update, remove ]);
};