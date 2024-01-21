import React, { useState } from 'react';
import { Filter, TodosFilterContext } from '@/contexts/todos/TodosFilterContext.ts';


export type TodosFilterProviderProps = {
    children: React.ReactNode;
};

const TodosFilterProvider: React.FC<TodosFilterProviderProps> = (props) => {
    const { children }          = props;
    const [ filter, setFilter ] = useState<Filter>({});

    return (
        <TodosFilterContext.Provider value={ { filter, setFilter } }>
            { children }
        </TodosFilterContext.Provider>
    );
};

export default React.memo(TodosFilterProvider);