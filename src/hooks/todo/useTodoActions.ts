import { CreateTodo, UpdateTodo } from '@/services/todo/todo.types.ts';
import { useCallback, useContext, useMemo } from 'react';
import { ITodoService } from '@/services/todo/todo-service.interface.ts';
import { ServiceTodosContext } from '@/contexts/services/ServiceTodosContext.ts';
import {
    TodosOptionsContext,
    TodosOptionsContextType,
} from '@/contexts/todos/TodosOptionsContext.ts';


export interface ITodoActions {
    create (createData: CreateTodo): Promise<string>;

    update (id: string, updateData: UpdateTodo): Promise<string>;

    remove (id: string): Promise<string>;
}

export const useTodoActions = function (): ITodoActions {
    const service: ITodoService            = useContext(ServiceTodosContext);
    const options: TodosOptionsContextType = useContext(TodosOptionsContext);

    const create = useCallback(async (createTodo: CreateTodo) => {
        return service
            .create(createTodo)
            .then(() => '')
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .catch((e) => e.message);
    }, [ service, options ]);

    const update = useCallback(async (id: string, updateData: UpdateTodo) => {
        return service
            .update(id, updateData)
            .then(() => '')
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .catch((e) => e.message);
    }, [ service, options ]);

    const remove = useCallback(async (id: string) => {
        return service
            .delete(id)
            .then(() => '')
            .then(() => options.setOptions((prev) => ({ ...prev })))
            .catch((e) => e.message);
    }, [ service, options ]);

    return useMemo(() => ({
        create, update, remove,
    }), [ create, update, remove ]);
};