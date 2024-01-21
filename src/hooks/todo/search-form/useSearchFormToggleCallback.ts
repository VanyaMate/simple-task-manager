import React, { useCallback } from 'react';
import { Filter } from '@/services/service.types.ts';
import { Todo } from '@/services/todo/todo.types.ts';


export const useSearchFormToggleCallback = function (setFilter: React.Dispatch<React.SetStateAction<Filter<Todo>>>, forState: boolean) {
    return useCallback((value: boolean) => {
        setFilter((prev) => {
            if (value) {
                if (prev.status?.value === !forState) {
                    delete prev.status;
                } else {
                    prev.status = {
                        value: forState,
                        type : 'equal',
                    };
                }
            } else {
                if (!prev.status?.value) {
                    prev.status = {
                        value: !forState,
                        type : 'equal',
                    };
                } else {
                    prev.status = {
                        value: !prev.status.value,
                        type : 'equal',
                    };
                }
            }
            return { ...prev };
        });
    }, [ setFilter, forState ]);
};