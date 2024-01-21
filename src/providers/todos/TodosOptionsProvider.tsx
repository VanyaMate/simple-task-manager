import React, { useState } from 'react';
import { Options, TodosOptionsContext } from '@/contexts/todos/TodosOptionsContext.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export type TodosOptionsProviderProps = {
    children: React.ReactNode;
};

const TodosOptionsProvider: React.FC<TodosOptionsProviderProps> = (props) => {
    const { children }            = props;
    const [ options, setOptions ] = useState<Options<Todo>>({
        limit : 10,
        offset: 0,
        sort  : [],
    });

    return (
        <TodosOptionsContext.Provider value={ { options, setOptions } }>
            { children }
        </TodosOptionsContext.Provider>
    );
};

export default React.memo(TodosOptionsProvider);