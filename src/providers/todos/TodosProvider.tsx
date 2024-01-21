import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TodosContext } from '@/contexts/todos/TodosContext.ts';
import { Todo } from '@/services/todo/todo.types.ts';
import TodosFilterProvider from '@/providers/todos/TodosFilterProvider.tsx';
import TodosOptionsProvider from '@/providers/todos/TodosOptionsProvider.tsx';
import { TodosFilterContext } from '@/contexts/todos/TodosFilterContext.ts';
import { TodosOptionsContext } from '@/contexts/todos/TodosOptionsContext.ts';


export type TodosProviderProps = {
    children: React.ReactNode
};

const TodosProvider: React.FC<TodosProviderProps> = (props) => {
    const { children }            = props;
    const [ todos, setTodos ]     = useState<Todo[]>([]);
    const [ pending, setPending ] = useState<boolean>(false);

    // Получить фильтры
    // Получить опции для поиска
    const { filter }  = useContext(TodosFilterContext);
    const { options } = useContext(TodosOptionsContext);

    useEffect(() => {
        setPending(true);
        setTodos([]);

        // query
    }, [ filter, options ]);

    const addTodo = useCallback((todo: Todo) => {
        setTodos((prev) => [ todo, ...prev.slice(0, prev.length - 1) ]);
    }, [ setTodos ]);

    return (
        <TodosContext.Provider value={ { todos, pending, addTodo } }>
            { children }
        </TodosContext.Provider>
    );
};

export default React.memo(TodosProvider);