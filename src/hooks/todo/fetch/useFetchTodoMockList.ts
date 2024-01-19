import { FetchData } from '@/hooks/fetch.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export const useFetchTodoMockList = function (): FetchData<Todo[]> {
    return {
        error  : null,
        process: false,
        data   : [
            {
                id         : '1',
                title      : 'Спросить о чем-то',
                description: 'description todo 1',
                date       : new Date().toLocaleDateString(),
                status     : true,
            },
            {
                id         : '2',
                title      : 'Сделать дела',
                description: 'description todo 2',
                date       : new Date().toLocaleDateString(),
                status     : false,
            },
            {
                id         : '3',
                title      : 'Записать в блокнот',
                description: 'description todo 3',
                date       : new Date().toLocaleDateString(),
                status     : false,
            },
            {
                id         : '4',
                title      : 'Сходить в магазин',
                description: 'description todo 4',
                date       : new Date().toLocaleDateString(),
                status     : true,
            },
        ],
    };
};