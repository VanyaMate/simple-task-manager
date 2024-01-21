import React, { useContext, useEffect, useState } from 'react';
import { Todo } from '@/services/todo/todo.types.ts';
import { ITodoService } from '@/services/todo/todo-service.interface.ts';
import { TodosContext } from '@/contexts/todos/TodosContext.ts';
import { TodosFilterContext } from '@/contexts/todos/TodosFilterContext.ts';
import { TodosOptionsContext } from '@/contexts/todos/TodosOptionsContext.ts';
import { ServiceTodosContext } from '@/contexts/services/ServiceTodosContext.ts';


export type TodosProviderProps = {
    children: React.ReactNode
};

const TodosProvider: React.FC<TodosProviderProps> = (props) => {
    const { children }            = props;
    const [ todos, setTodos ]     = useState<Todo[]>([]);
    const [ count, setCount ]     = useState<number>(0);
    const [ pending, setPending ] = useState<boolean>(false);
    const service: ITodoService   = useContext(ServiceTodosContext);

    // Получить фильтры
    // Получить опции для поиска
    const { filter }  = useContext(TodosFilterContext);
    const { options } = useContext(TodosOptionsContext);

    useEffect(() => {
        setPending(true);
        // query
        service
            .findMany(filter, options)
            .then((response) => {
                setTodos(response.items);
                setCount(response.count);
            })
            .catch(() => {
                setTodos([]);
                setCount(0);
            })
            .finally(() => setPending(false));
    }, [ service, filter, options ]);

    return (
        <TodosContext.Provider value={ { todos, count, pending } }>
            { children }
        </TodosContext.Provider>
    );
};

export default React.memo(TodosProvider);