import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CreateTodo, Todo } from '@/services/todo/todo.types.ts';
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
    const { filter }              = useContext(TodosFilterContext);
    const { options, setOptions } = useContext(TodosOptionsContext);

    useEffect(() => {
        setPending(true);
        setTodos([]);
        setCount(0);
        // query
        service
            .findMany(filter, options)
            .then((response) => {
                setTodos(response.items);
                setCount(response.count);
            })
            .finally(() => setPending(false));
    }, [ service, filter, options ]);

    const addTodo = useCallback(async (createTodo: CreateTodo) => {
        /**
         * Выглядит как то, что тут явно лишнее. Но как будто для такого проекта допустимо
         */
        return service
            .create(createTodo)
            .then(() => setOptions((prev) => ({
                ...prev, sort: [ 'date', 'desc' ], offset: 0,
            })))
            .then(() => '')
            .catch((e) => e.message);
    }, [ service, setOptions ]);

    return (
        <TodosContext.Provider value={ { todos, count, pending, addTodo } }>
            { children }
        </TodosContext.Provider>
    );
};

export default React.memo(TodosProvider);