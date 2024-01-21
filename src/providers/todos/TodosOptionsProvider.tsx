import React, { useEffect, useState } from 'react';
import { TodosOptionsContext } from '@/contexts/todos/TodosOptionsContext.ts';
import { Todo } from '@/services/todo/todo.types.ts';
import { Options } from '@/services/service.types.ts';
import {
    LS_OPTIONS_PROVIDER,
} from '@/providers/todos/local-storage-names.ts';


export type TodosOptionsProviderProps = {
    children: React.ReactNode;
};

const TodosOptionsProvider: React.FC<TodosOptionsProviderProps> = (props) => {
    const { children }            = props;
    const [ options, setOptions ] = useState<Options<Todo>>(
        JSON.parse(localStorage.getItem(LS_OPTIONS_PROVIDER) ?? '{"limit":10,"offset":0,"sort":[]}'),
    );

    useEffect(() => {
        localStorage.setItem(LS_OPTIONS_PROVIDER, JSON.stringify(options));
    }, [ options ]);

    return (
        <TodosOptionsContext.Provider value={ { options, setOptions } }>
            { children }
        </TodosOptionsContext.Provider>
    );
};

export default React.memo(TodosOptionsProvider);