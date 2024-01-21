import React, { useCallback } from 'react';
import { Options } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export const useSearchOptionsFormSelectSortCallback = function (setOptions: React.Dispatch<React.SetStateAction<Options<Todo>>>, type: 'asc' | 'desc') {
    return useCallback(() => {
        setOptions((prev) => {
            if (prev.sort[0] === 'date' && prev.sort[1] === type) {
                return { ...prev, sort: [] };
            } else {
                return { ...prev, sort: [ 'date', type ] };
            }
        });
    }, [ setOptions, type ]);
};